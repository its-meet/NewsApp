const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const authRoute = require('./routes/auth');
const articleRoute = require('./routes/article');
dotenv.config();
app.use(express.json())

mongoose.connect(process.env.MONGO_URL)
.then((console.log('Connected to mongoDB')))
.catch((error)=>console.log(error))


app.use('/api/auth',  authRoute);
app.use('/api/articles',  articleRoute);

app.listen(8000, ()=>{console.log('App is listening at port 8000')})