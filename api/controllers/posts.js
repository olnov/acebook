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
const createPost = async (req, res) => {
  try {
    const { title, message } = req.body;
    const post_author = req.body.user_id;
    console.log(req.user_id)
  
    const post = new Post({
      title,
      message,
      post_author
    });
    
    post.save();
    const newToken = generateToken(req.user_id);
    res.status(201).json({ message: "Post created", token: newToken });

  } catch (error) {
    res.status(500).json({ error: "Could not create post" });
  }
};

// This function first checks if the post exists
// It then checks if the user requesting to delete the post
// is the author of the post, to ensure that only the author
// of the post is authorised to delete it 

const deletePost = async (req, res) => {
  const { post_id } = req.params;
  const user_id = req.body.user_id;

  try {
    const post = await Post.findById(post_id);

    if (!post) {
      return res.status(404).json({ error: 'Could not find post' });
    }

    // post.post_author returns an ObjectID, so to compare the user_id string
    // we need to convert post.post_author to a string 
    if (post.post_author.toString() !== user_id) {
      return res.status(403).json({ error: 'You are not authorized to delete this post' });
    }

    await Post.findByIdAndDelete(post_id);
    const newToken = generateToken(req.user_id);
    res.status(200).json({ message: 'Post deleted successfully', token : newToken});

  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the post' });
  }
};


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
