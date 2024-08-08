const express = require('express');
const router = express.Router();
const PostsController = require('../controllers/posts');
const tokenChecker = require('../middleware/tokenChecker');


router.get("/", PostsController.getAllPosts);
router.get("/:id", PostsController.getPostById);
router.get('/users/:user_id/posts', PostsController.getPostsByUser);

// POST route
router.post('/', tokenChecker, PostsController.createPost);

// DELETE route
router.delete("/:id", PostsController.deletePost);

module.exports = router;
