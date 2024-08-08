const User = require('./user'); 
const Post = require('./post')
const mongoose = require("mongoose");

const LikeSchema = new mongoose.Schema({
  post_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post', 
    required: true,
    index: true
  },
  author_id: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true,
    index: true
   },
});

const Like = mongoose.model("Like", LikeSchema);


module.exports = Like;