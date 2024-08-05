const express = require('express');
const router = express.Router();
const PostsController = require('../controllers/posts');
const tokenChecker = require('../middleware/tokenChecker');

// Define your routes here
router.get('/', PostsController.getAllPosts);
router.post('/', tokenChecker, PostsController.createPost);
router.get('/users/:user_id/posts', PostsController.getPostsByUser);

module.exports = router;
