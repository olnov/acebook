const Post = require("../models/post");
const { generateToken } = require("../lib/token");


const getAllPosts = async (req, res) => {
  const posts = await Post.find();
  const token = generateToken(req.user_id);
  res.status(200).json({ posts: posts, token: token });
};

// This function returns a specific post via it's objectID
// This might be useful for the 'see post in more detail' feature

const getPostById = async (req, res) => {
  try {
    const postId = req.params.id;  // Get the post ID from the request parameters
    const post = await Post.findById(postId); 

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    const token = generateToken(req.user_id); 
    res.status(200).json({ post: post, token: token }); 
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the post' });
  }
};

//  This function allows a user to create a post
// The user_id is saved in the request body via the middleware token generator
const createPost = async (req, res) => {
  // const {post_title, message, post_author, is_private} = req.body;
  const {title, message, post_author} = req.body;
  const date_created = new Date().toLocaleString("en-GB")

  const post = new Post({
    title,
    message,
    post_author
    // date_created,
    // is_private
  });

  post.save();

  const newToken = generateToken(req.user_id);
  res.status(201).json({ message: "Post created", token: newToken });
};

// This function first checks if the post exists
// If it does, it deletes the post 

const deletePost = async (req, res) => {
  const postId = req.params.id;
  const post = await Post.findByIdAndDelete(postId);

  // NEED TO FINISH WRITING THIS
}
const PostsController = {
  getAllPosts: getAllPosts,
  createPost: createPost,
  getPostById: getPostById,
  deletePost: deletePost
};

// Question to ask John - is this destructuring?
// What is the benefit of doing this? 

module.exports = PostsController;

// When designing a feature that allows a user
// to delete the post, this option should only be 
// available to them if they are logged in 
