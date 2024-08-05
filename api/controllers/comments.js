const Comment = require("../models/comments")
const { generateToken } = require("../lib/token");
const Post = require("../models/post");

// Need a getAllComments function but only 
// for a specific post with specific ObjectID
// Work in progress right now

const getComments = async (req, res) => {
    res.status(200).json({ message: "Route is working" });
};

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

const createComment = async (req, res) => {
    const { message, author_id, } = req.body;
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

    const newToken = generateToken(req.user_id);
    res.status(201).json({ message: "Comment created", comment: savedComment.message, token: newToken });
} catch (error) {
    res.status(500).json({ error: "Could not post comment" });
}
};

const CommentsController = {
    getComments: getComments,
    createComment: createComment,
};

module.exports = CommentsController;