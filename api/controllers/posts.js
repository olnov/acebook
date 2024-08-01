const Post = require("../models/post");
const { generateToken } = require("../lib/token");

const getAllPosts = async (req, res) => {
  const posts = await Post.find();
  const token = generateToken(req.user_id);
  res.status(200).json({ posts: posts, token: token });
};

const createPost = async (req, res) => {
  const {post_title, message, post_author, is_private} = req.body;
  // const post_title = req.body.title;
  // const message = req.body.message;
  // const author = req.user_id
  // const date = new Date.now();
  // const is_private = req.body.is_private
  const date_created = new Date().toLocaleString("en-GB")

  const post = new Post({
    post_title,
    message,
    post_author,
    date_created,
    is_private
  });

  post.save();

  const newToken = generateToken(req.user_id);
  res.status(201).json({ message: "Post created", token: newToken });
};

const PostsController = {
  getAllPosts: getAllPosts,
  createPost: createPost,
};

module.exports = PostsController;
