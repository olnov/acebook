const Like = require("../models/like");
const Post = require("../models/post");

const addLike = async (req, res) => {
  const { author_id } = req.body;
  const { post_id } = req.params;

  try {
    const post = await Post.findById(post_id);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    const like = new Like({ author_id, post_id });
    const savedLike = await like.save();
    post.likes.push(savedLike._id);
    await post.save();

    res.status(201).json({ message: "Post liked", like: savedLike });
  } catch (error) {
    console.error("Error in addLike:", error);
    res.status(500).json({ error: "Could not like post" });
  }
};

const unLike = async (req, res) => {
  const { like_id } = req.params;
  const user_id = req.user_id;

  try {
    const like = await Like.findById(like_id);

    if (!like) {
      return res.status(404).json({ error: 'Could not find like' });
    }

    if (like.author_id.toString() !== user_id) {
      return res.status(403).json({ error: 'You are not authorized to unlike this post' });
    }

    await Like.findByIdAndDelete(like_id);
    res.status(200).json({ message: 'Unliked successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while unliking post' });
  }
};

const getLikesforPost = async (req, res) => {
  const { post_id } = req.params;
  try {
    const post = await Post.findById(post_id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    const likes = await Like.find({ post_id });
    res.status(200).json({ likes });
  } catch (error) {
    res.status500).json({ message: "Error fetching likes for post", error });
  }
};

const LikesController = {
  getLikesforPost,
  addLike,
  unLike
};

module.exports = LikesController;
