const User = require("../models/user");

const create = async (req, res) => {
  const { full_name, email, password, friends } = req.body;
  const user = new User({ full_name, email, password, friends });

  try {
    await user.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(400).json({ message: "Error creating user", error: err.message });
  }
};

const getUserById = async (req, res) => {
  const userId = req.params.user_id;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ id: user.id, full_name: user.full_name, email: user.email, user_bio: user.user_bio });
  } catch (err) {
    res.status(500).json({ message: "Error fetching user details", error: err.message });
  }
};

const updateUserById = async (req, res) => {
  const userId = req.params.user_id;
  const update = { user_bio: req.body.user_bio };
  try {
    const user = await User.findByIdAndUpdate(userId, update, { new: true });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User updated successfully", updatedUser: user });
  } catch (err) {
    res.status(500).json({ message: "Error updating user", error: err.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Error fetching users", error: err.message });
  }
};

const getUserFriends = async (req, res) => {
  const userId = req.params.user_id;
  try {
    const user = await User.findById(userId).populate('friends', 'full_name email');
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user.friends || []); // Ensure an empty array is returned if no friends
  } catch (err) {
    res.status(500).json({ message: "Error fetching friends", error: err.message });
  }
};

const addRemoveFriend = async (req, res) => {
  const { user_id, friendId } = req.params;
  try {
    const user = await User.findById(user_id);
    const friend = await User.findById(friendId);

    if (!user || !friend) {
      return res.status(404).json({ message: "User or friend not found" });
    }

    if (user.friends.includes(friendId)) {
      user.friends.pull(friendId);
      friend.friends.pull(user_id);
    } else {
      user.friends.push(friendId);
      friend.friends.push(user_id);
    }

    await user.save();
    await friend.save();

    res.status(200).json(user.friends);
  } catch (err) {
    res.status(500).json({ message: "Error adding/removing friend", error: err.message });
  }
};

const UsersController = {
  create,
  getUserById,
  updateUserById,
  getAllUsers,
  getUserFriends,
  addRemoveFriend
};

module.exports = UsersController;
