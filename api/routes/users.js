const express = require("express");

const UsersController = require("../controllers/users");

const router = express.Router();

router.post("/", UsersController.create);
router.get('/:user_id', UsersController.getUserById);
router.patch('/:user_id', UsersController.updateUserById);

module.exports = router;
