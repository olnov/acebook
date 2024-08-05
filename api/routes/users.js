const express = require("express");

const UsersController = require("../controllers/users");

const router = express.Router();

router.post('/', UsersController.create);
router.post('/search', UsersController.getUsersByName);
router.get('/search', (req, res) => {
    res.status(405).json({ message: "Method Not Allowed" });
});
router.get('/:user_id', UsersController.getUserById);
router.patch('/:user_id', UsersController.updateUserById);


module.exports = router;
