const Post = require("../models/post");
const { generateToken } = require("../lib/token");

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('post_author', 'full_name');
    const token = req.user_id ? generateToken(req.user_id) : null;
    res.status(200).json({ posts, token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createPost = async (req, res) => {
  try {
    const post = new Post({
      ...req.body,
      date_created: new Date(),
      post_author: req.user_id, // Ensure the post author is set
    });
    await post.save();

    const newToken = req.user_id ? generateToken(req.user_id) : null;
    res.status(201).json({ message: "Post created", post, token: newToken });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const PostsController = {
  getAllPosts,
  createPost,
};

module.exports = PostsController;
