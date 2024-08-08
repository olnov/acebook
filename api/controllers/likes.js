const Like = require("../models/like")
const { generateToken } = require("../lib/token");
const Post = require("../models/post");

// Need a getAllComments function but only 
// for a specific post with specific ObjectID
// Work in progress right now

const getLikes = async (req, res) => {
    res.status(200).json({ message: "Route is working" });
};


const addLike = async (req, res) => {
    const { author_id } = req.body;
    const { post_id } = req.params;
    console.log('this is a test message')
    
    try {
        console.log('we are looking for the post')
        const post = await Post.findById(post_id);
        if (!post) {
            return res.status(404).json({ error: "Post not found" });
        }
        console.log('we found the post')
        
        const like = new Like({
            author_id,
            post_id
        });
        
        console.log('we created the like object')
        const savedLike = await like.save();
        post.like.push(savedLike._id);
        await post.save();
        
        // const newToken = generateToken(req.user_id);
        res.status(201).json({ message: "Post liked"});
    } catch (error) {
        res.status(500).json({ error: "Could not like post" });
        console.log(error);
    }
};

// This function allows a user to delete the comment that they have left 
// The function first checks if the comment actually exists 
// Then to ensure that only the author of the comment is able to delete it

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
    const newToken = generateToken(req.user_id);
    res.status(200).json({ message: 'Unliked successfully', token: newToken });
  
    } catch (error) {
    res.status(500).json({ error: 'An error occurred while unliking post' });
    }
  };

const LikesController = {
    getLikes: getLikes,
    addLike: addLike,
    unLike: unLike
};

module.exports = LikesController;


// const getAllCommentsforPost = async (req, res) => {
//     const { post_id } = req.params;
//     try {
//         const post = await Post.findById(post_id);
//         if (!post) {
//             return res.status(404).json({ error: 'Post could not be found' });
//         }

//     }
// }

// This function takes a postID from the request body
// and checks if it exists first before allowing
// the user to leave a comment