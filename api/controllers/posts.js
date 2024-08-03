const Post = require("../models/post");
const { generateToken } = require("../lib/token");

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('post_author', 'full_name');
    const token = generateToken(req.user_id);
    res.status(200).json({ posts: posts, token: token });
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

    const newToken = generateToken(req.user_id);
    res.status(201).json({ message: "Post created", token: newToken, post });
  } catch (error) {
    res.status(400).json({ message: "Error creating post" });
  }
};

const PostsController = {
  getAllPosts: getAllPosts,
  createPost: createPost,
};

module.exports = PostsController;
