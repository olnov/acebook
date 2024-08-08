const express = require("express");
const router = express.Router();
const tokenChecker = require('../middleware/tokenChecker');
const LikesController = require("../controllers/likes");

router.get("/:post_id", tokenChecker, LikesController.getLikesforPost);
router.post('/:post_id', tokenChecker, LikesController.addLike);
router.delete("/:like_id", tokenChecker, LikesController.unLike);

module.exports = router;
