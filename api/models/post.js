const User = require('./user'); 
const mongoose = require("mongoose");

// A Schema defines the "shape" of entries in a collection. This is similar to
// defining the columns of an SQL Database.
const PostSchema = new mongoose.Schema({
  title: {
    type: String, 
    required: true
  },
  message: {
    type : String, 
    required: true,  
    maxlength: 300
  },
  post_author: { 
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
  // is_private : {
  //   type: Boolean, 
  //   required: true
  // },
  comments: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Comment',
    index: true}]
});

// We use the Schema to create the Post model. Models are classes which we can
// use to construct entries in our Database.
const Post = mongoose.model("Post", PostSchema);

// These lines will create a test post every time the server starts.
// You can delete this once you are creating your own posts.
// const dateTimeString = new Date().toLocaleString("en-GB");
// new Post({ message: `Test message, created at ${dateTimeString}` }).save();

module.exports = Post;
