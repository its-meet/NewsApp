const router = require('express').Router();
const User = require('../models/User')
const bcrypt = require('bcrypt');

//SignUp

router.post('/signup', async (req,res)=>{
    try {
        const {username, email} = req.body;

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        
        const newUser = new User({username, email, password:hashedPassword})
        const user = await newUser.save()
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
})

//Signin  

router.post('/signin', async(req,res)=>{
    try {
        const user = await User.findOne({email:req.body.email});
        if(!user){
            res.status(400).json('Wrong Credentials!')
        }
        else{
            const validatePass = await bcrypt.compare(req.body.password, user.password) 
            if(!validatePass){
                res.status(400).json('Wrong Credentials!')
            }
            else{
                const {password, _id, ...others} = user._doc;
                res.status(200).json(others)
            }
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;