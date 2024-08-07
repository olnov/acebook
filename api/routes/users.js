const express = require('express');
const UsersController = require('../controllers/users');
const tokenChecker = require('../middleware/tokenChecker');
const router = express.Router();

// Route to get current user details using the token
router.get('/me', tokenChecker, (req, res) => {
  UsersController.getUserById({ params: { user_id: req.user_id } }, res);
});

// User routes
router.post('/', UsersController.create);
router.get('/', UsersController.getAllUsers);
router.post('/search', UsersController.getUsersByName);
router.get('/search', (req, res) => {
    res.status(405).json({ message: "Method Not Allowed" });
});
router.get('/:user_id', UsersController.getUserById);
router.patch('/:user_id', UsersController.updateUserById);
router.get('/:id/friends', UsersController.getUserFriends);
router.patch('/:id/:friendId', tokenChecker, UsersController.addRemoveFriend);

module.exports = router;