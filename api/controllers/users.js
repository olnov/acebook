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

const getAllUsers = async (req, res) => {
  try {
    console.log('received Request to get all users')
    const users = await User.find(); // This fetches all users
    res.status(200).json(users); // Respond with the list of users
  } catch (err) {
    console.log('request errored!')
    res.status(500).json({ message: err.message }); // Handle errors
  }
};

// const getUserFriends = async (req, res) => {
//   const id = req.params.id;
//   console.log("this is your user's id: " + id)
//   try {
//     // const user = await User.findById(id).select("friends full_name email _id");
//     const user = await User.findById(id).populate("friends");
//     console.log(user)
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     console.log(user.friends)
//     res.status(200).json(user.friends || []); // Ensure an empty array is returned if no friends
//   } catch (err) {
//     const user = await User.findById(id).populate('friends', 'full_name', 'email');
//     res.status(500).json({ message: "Error fetching friends", error: err.message });
//     console.log('this is the user variable: ' + user)
//   }
// };

const getUserFriends = async (req, res) => {
  try {
    const { id } = req.params; 
    console.log("This is your user's id: " + id)
    const user = await User.findById(id)  
  
    const friends = await Promise.all(
    user.friends.map((id) => User.findById(id)));

    const formattedFriends = friends.map(
      ({ _id, full_name, email}) => {
        return { _id, full_name, email};
      } 
    );

    res.status(200).json(formattedFriends);
  } catch (err) {
    res.status(404).json({ message: err.message })   
  }
};

const addRemoveFriend = async (req, res) => {
  const { id , friendId } = req.params;
  console.log("This is your user's id: " + id + " and this is your friend's id: " + friendId)
  try {
    const user = await User.findById(id);
    const friend = await User.findById(friendId);

    if (!user || !friend) {
      return res.status(404).json({ message: "User or friend not found" });
    }

    if (user.friends.includes(friendId)) {
      user.friends.pull(friendId);
      friend.friends.pull(id);
    } else {
      user.friends.push(friendId);
      friend.friends.push(id);
    }

    await user.save();
    await friend.save();

    res.status(200).json(user.friends);
  } catch (err) {
    res.status(500).json({ message: "Error adding/removing friend", error: err.message });
  }
};

// Function to expose user information by id
const getUserById = async (req, res) => {
  const userId = req.params.user_id;
  try {
    const user = await User.findById(userId);
    if (!user) {
      res.status(400).json({ message: "User does not exist"});
      console.log("Can't find user with id: ", {userId});
    } else {
      res.status(200).json({ id: user.id, full_name: user.full_name, email: user.email, user_bio: user.user_bio});
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching user details", error: error.message });
  }
};


// Function to update user data. In the first iteration limited to user_bio.
const updateUserById = async (req, res) => {
  const userId = req.params.user_id;
  const update = { user_bio: req.body.user_bio }
  try {
    const user = await User.findByIdAndUpdate(userId, update, { new:true });
    if (!user) {
      res.status(400).json({ message: "Something went wrong. Please check the logs."});
      console.log("Can't find user with id: ", {userId});
    } else {
      res.status(200).json({message: "Updated", udatedUser: user });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating user", error: error.message });
  }
};

// Search users by full name
const getUsersByName = async (req,res) => {
  const userName = req.body.name;
  const users = await User.find({ "full_name": { $regex: new RegExp(userName, "i") } }).select("full_name _id");
  if (!users) {
    res.status(400).json({ message: "No matches for your request "});
    console.log("Reques: ", userName);
  } else {
    res.status(200).json({ users });
  }
}


const UsersController = {
  create,
  getUserById,
  updateUserById,
  getAllUsers,
  getUsersByName,
  getUserFriends,
  addRemoveFriend
};

module.exports = UsersController;