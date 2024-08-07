const Post = require("../models/post");


const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('post_author', 'full_name');
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts" });
  }
};

// This function returns a specific post via it's objectID
// This might be useful for the 'see post in more detail' feature
// This also returns the comments for a specific post 

const getPostById = async (req, res) => {
  try {
    const postId = req.params.id;  // Get the post ID from the request parameters
    const post = await Post.findById(postId).populate({
      path: 'comments',
      populate: { path: 'user', select: 'full_name'}
    }); 

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
  console.log('We are here')
  try {
    const { title, message, post_author, is_private } = req.body;
    // const post_author = req.body.user_id
    console.log(post_author)
  
    const post = new Post({
      title,
      message,
      post_author,
      is_private
    });
    
    await post.save();
    // const newToken = generateToken(req.user_id);
    // res.status(201).json({ message: "Post created", token: newToken });
    res.status(201).json({ message: "New post created" })

  } catch (error) {
    res.status(500).json({ error: "Could not create post" });
  }
}

const getPostsByUser = async (req, res) => {
  try {
    const posts = await Post.find({ post_author: req.params.user_id }).populate('post_author', 'full_name');
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user's posts" });

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

// This function allows a user to update/edit a post if they are the author of the post
// First, the function checks if the post actually exists - I'm not sure why? If the user can see the post in front of them surely it exists?
// Secondly, the function checks if the user trying to do the UPDATE request is also the author of the post 
// If these 2 conditions are satisfied, then the post can be update

// const updatePost = async (req, res) => {
//   const { post_id } = req.params; 
//   const user_id = req.body.user_id;

//   try {
//     const post = await Post.findById(post_id);
//     if (!post) {
//       return res.status(404).json({ error: 'Could not find post' });
//     }
//     if (post.post_author.toString() !== user_id) {
//       return res.status(403).json({ error: 'You are not authorized to edit this post' });
//     }
//   }
// }

const PostsController = {
  getAllPosts: getAllPosts,
  createPost: createPost,
  getPostById: getPostById,
  deletePost: deletePost,
  getPostsByUser: getPostsByUser
};

// Question to ask John - is this destructuring?
// What is the benefit of doing this? 

module.exports = PostsController;

// When designing a feature that allows a user
// to delete the post, this option should only be 
// available to them if they are logged in
