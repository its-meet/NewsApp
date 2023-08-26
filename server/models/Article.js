const mongoose = require("mongoose");

const savedArticleSchema = new mongoose.Schema(
  {
    author:{
        type:String,
        required:true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
      unique: true,
    },
    imageUrl: {
      type: String,
      required: true,
      unique: true,
    },
    date:{
      type:Date,
      default:new Date().toString(),
      
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('SavedArticles', savedArticleSchema)