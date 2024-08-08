const express = require("express");
const router = express.Router();
const tokenChecker = require('../middleware/tokenChecker');


const LikesController = require("../controllers/likes");

router.get("/", LikesController.getLikes);

// GET routes 
// router.get("/", PostsController.getAllPosts);
// router.get("/:id", likesController.getlikes);

// POST route for a specific Facebook post
router.post('/:post_id', tokenChecker, LikesController.addLike);
// router.post('/:post_id', likesController.createComment);

// DELETE route
router.delete("/:like_id", LikesController.unLike);

module.exports = router;