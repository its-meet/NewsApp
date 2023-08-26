const router = require('express').Router();
const User = require('../models/User')
const Article = require('../models/Article');

//save articles

router.post('/', async (req,res)=>{
    const newArticle = new Article(req.body);
    try {
        const saveArticle = await newArticle.save()
        res.status(200).json(saveArticle)
    } catch (error) {
        res.status(500).json(error)
    }
})

//get articles
router.get('/', async(req,res)=>{
    try {
        const artilces = await Article.find();
        res.status(200).json(artilces);
    } catch (error) {
        res.status(500).json(error)
    }
})



module.exports = router;