const express = require('express');
const multer = require('multer');
const { uploadProfileImage, getProfileImage } = require('../controllers/profile-image-controller');

const router = express.Router();

const upload = multer ({
    limits: {fileSize: 1024 * 1024 },
});

router.post('/', upload.single('profile_image'), uploadProfileImage);
router.get('/:user_id', getProfileImage);

module.exports = router;
