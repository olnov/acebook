const express = require("express");
const tokenChecker = require("../middleware/tokenChecker")
const UsersController = require("../controllers/users.js");
const router = express.Router();


//read//

router.get("/:id", tokenChecker, UsersController.getUser);
router.get("/:id/friends", tokenChecker, UsersController.getUserFriends);

//update//

router.patch("/:id/:friendId", tokenChecker, UsersController.addRemoveFriend);


//posts//
console.log('UsersController: ', UsersController)

router.post("/", UsersController.create);


module.exports = router;
