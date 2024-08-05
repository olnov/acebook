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
router.get('/:user_id', UsersController.getUserById);
router.put('/:user_id', UsersController.updateUserById);
router.get('/', UsersController.getAllUsers);
router.get('/:user_id/friends', UsersController.getUserFriends);
router.patch('/:user_id/friends/:friendId', UsersController.addRemoveFriend);

module.exports = router;
