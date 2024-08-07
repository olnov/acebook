const Comment = require("../models/comments")
const { generateToken } = require("../lib/token");
const Post = require("../models/post");

// Need a getAllComments function but only 
// for a specific post with specific ObjectID
// Work in progress right now

const getComments = async (req, res) => {
    res.status(200).json({ message: "Route is working" });
};


const createComment = async (req, res) => {
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
        
        const comment = new Comment({
            message,
            author_id,
            post_id
        });
        
        console.log('we created the comment object')
        const savedComment = await comment.save();
        post.comments.push(savedComment._id);
        await post.save();
        
        // const newToken = generateToken(req.user_id);
        res.status(201).json({ message: "Comment created", comment: savedComment.message });
    } catch (error) {
        res.status(500).json({ error: "Could not post comment" });
    }
};

// This function allows a user to delete the comment that they have left 
// The function first checks if the comment actually exists 
// Then to ensure that only the author of the comment is able to delete it

const deleteComment = async (req, res) => {
    const { comment_id } = req.params;
    const user_id = req.user_id;

    try {
        const comment = await Comment.findById(comment_id);
  
    if (!comment) {
        return res.status(404).json({ error: 'Could not find comment' });
    }
  
    if (comment.author_id.toString() !== user_id) {
        return res.status(403).json({ error: 'You are not authorized to delete this post' });
    }
  
    await Comment.findByIdAndDelete(comment_id);
    const newToken = generateToken(req.user_id);
    res.status(200).json({ message: 'Comment deleted successfully', token: newToken });
  
    } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the comment' });
    }
  };

const CommentsController = {
    getComments: getComments,
    createComment: createComment,
    deleteComment: deleteComment
};

module.exports = CommentsController;


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