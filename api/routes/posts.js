const express = require("express");
const router = express.Router();

const PostsController = require("../controllers/posts");

// GET routes 
router.get("/", PostsController.getAllPosts);
router.get("/:id", PostsController.getPostById);

// POST route
router.post("/", PostsController.createPost);

// DELETE route
router.delete("/:id", PostsController.deletePost);

module.exports = router;
