const User = require('../models/user');

// Controller function to handle profile image upload
const uploadProfileImage = async (req, res) => {
  try {
    const userId = req.body.user_id;
    console.log("User id: ",userId);
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.profile_image = req.file.buffer;
    await user.save();

    res.status(200).json({ message: 'Profile image uploaded successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error', error });
  }
};


// Controller function to hangle profile image get
const getProfileImage = async (req, res) => {
  try {
    const userId = req.params.user_id;
    console.log("User ID from params:", userId);
    const user = await User.findById(userId).select('+profile_image');
    if (!user) {
      console.log('User not found');
      return res.status(404).json({ message: 'User not found' });
    }

    if (!user.profile_image) {
      console.log('Profile image not found');
      return res.status(404).json({ message: 'Profile image not found' });
    }

    // Log the length of the binary data to confirm its presence
    console.log('Profile image binary data length:', user.profile_image.length);

    res.set('Content-Type', 'image/jpeg'); // Assume JPEG for simplicity, adjust if needed
    res.send(user.profile_image);
  } catch (error) {
    console.error('Error retrieving profile image:', error);
    res.status(500).json({ message: 'Internal Server Error', error });
  }
};

module.exports = { uploadProfileImage, getProfileImage };
