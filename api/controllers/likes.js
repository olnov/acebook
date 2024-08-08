const like = require("../models/like")
const { generateToken } = require("../lib/token");
const Post = require("../models/post");

// Need a getAlllikes function but only 
// for a specific post with specific ObjectID
// Work in progress right now

const getlikes = async (req, res) => {
    res.status(200).json({ message: "Route is working" });
};


const createlike = async (req, res) => {
    const { message, author_id } = req.body;
    const { post_id } = req.params;
    console.log('this is a test message')
    
    try {
        console.log('we are looking for the post')
        const post = await Post.findById(post_id);
        if (!post) {
            return res.status(404).json({ error: "Post not't found" });
        }
        console.log('we found the post')
        
        const like = new like({
            message,
            author_id,
            post_id
        });
        
        console.log('we created the like object')
        const savedlike = await like.save();
        post.likes.push(savedlike._id);
        await post.save();
        
        // const newToken = generateToken(req.user_id);
        res.status(201).json({ message: "like created", like: savedlike.message });
    } catch (error) {
        res.status(500).json({ error: "Could not post like" });
    }
};

// This function allows a user to delete the like that they have left 
// The function first checks if the like actually exists 
// Then to ensure that only the author of the like is able to delete it

const deletelike = async (req, res) => {
    const { like_id } = req.params;
    const user_id = req.user_id;

    try {
        const like = await like.findById(like_id);
  
    if (!like) {
        return res.status(404).json({ error: 'Could not find like' });
    }
  
    if (like.author_id.toString() !== user_id) {
        return res.status(403).json({ error: 'You are not authorized to delete this post' });
    }
  
    await like.findByIdAndDelete(like_id);
    const newToken = generateToken(req.user_id);
    res.status(200).json({ message: 'like deleted successfully', token: newToken });
  
    } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the like' });
    }
  };

const likesController = {
    getlikes: getlikes,
    createlike: createlike,
    deletelike: deletelike
};

module.exports = likesController;


// const getAlllikesforPost = async (req, res) => {
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
// the user to leave a like