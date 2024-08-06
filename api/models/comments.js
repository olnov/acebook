const User = require('./user'); 
const Post = require('./post')
const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  post_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post', 
    required: true,
    index: true
  },
  message: {
    type : String, 
    required: true,  
    maxlength: 300
  },
  author_id: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true,
    index: true
   },
  date_created : {
    type: Date, 
    default: Date.now, 
    required: true
  },
});

const Comment = mongoose.model("Comment", CommentSchema);


module.exports = Comment;