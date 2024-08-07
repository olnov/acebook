const express = require("express");
const router = express.Router();

const CommentsController = require("../controllers/comments");

router.get("/", CommentsController.getComments);

// GET routes 
// router.get("/", PostsController.getAllPosts);
// router.get("/:id", CommentsController.getComments);

// POST route for a specific Facebook post
router.post('/:post_id', CommentsController.createComment);
// router.post('/:post_id', CommentsController.createComment);

// DELETE route
router.delete("/:comment_id", CommentsController.deleteComment);

module.exports = router;