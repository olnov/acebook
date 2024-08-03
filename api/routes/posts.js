const express = require('express');
const router = express.Router();
const PostsController = require('../controllers/posts');
const tokenChecker = require('../middleware/tokenChecker');

router.get('/', PostsController.getAllPosts); // Public endpoint
router.post('/', tokenChecker, PostsController.createPost); // Protected endpoint

module.exports = router;
