const express = require('express');
const router = express.Router();
const PostsController = require('../controllers/posts');
const tokenChecker = require('../middleware/tokenChecker');


router.get("/", PostsController.getAllPosts);
router.get("/:id", PostsController.getPostById);
router.post('/', tokenChecker, PostsController.createPost);
router.get('/users/:user_id/posts', PostsController.getPostsByUser);


// DELETE route
router.delete("/:id", PostsController.deletePost);

module.exports = router;
