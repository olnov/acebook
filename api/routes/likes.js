const express = require("express");
const router = express.Router();
const tokenChecker = require('../middleware/tokenChecker');


const likesController = require("../controllers/likes");

router.get("/", likesController.getlikes);

// GET routes 
// router.get("/", PostsController.getAllPosts);
// router.get("/:id", likesController.getlikes);

// POST route for a specific Facebook post
router.post('/:post_id', tokenChecker, likesController.createComment);
// router.post('/:post_id', likesController.createComment);

// DELETE route
router.delete("/:comment_id", likesController.deleteComment);

module.exports = router;