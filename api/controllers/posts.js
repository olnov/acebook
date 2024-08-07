const Post = require("../models/post");

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('post_author', 'full_name');
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts" });
  }
};

const createPost = async (req, res) => {
  try {
    const post = new Post({
      ...req.body,
      post_author: req.user_id, // Set the post author to the authenticated user
      date_created: new Date(),
    });
    await post.save();
    res.status(201).json({ message: "Post created", post });
  } catch (error) {
    res.status(400).json({ message: "Error creating post" });
  }
};

const getPostsByUser = async (req, res) => {
  try {
    const posts = await Post.find({ post_author: req.params.user_id }).populate('post_author', 'full_name');
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user's posts" });
  }
};

const PostsController = {
  getAllPosts,
  createPost,
  getPostsByUser,
};

module.exports = PostsController;
