const jwt = require("jsonwebtoken");
const User = require("../models/user");

const create = async (req, res) => {
  const full_name = req.body.full_name;
  const email = req.body.email;
  const password = req.body.password;
  console.log("HERE!!");
  console.log("Full name:" + full_name);
  console.log("Email:" + email);
  console.log("Password:" + password);

  const user = new User({ 
    full_name, 
    email, 
    password,
    friends,  
  });

    user
    .save()
    .then((user) => {
      console.log("User created, id:", user._id.toString());
      res.status(201).json({ message: "OK" });
    })
    .catch((err) => {
      console.error(err);
      res.status(400).json({ message: "Something went wrong" });
    });
};


// Read

const getUser = async(req, res) => {
  try{
    const { id } = req.params; 
    const user = await User.findById(id)
    res.status(200).json(user)
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}

const getUserFriends = async (req, res) => {
  try {
    const { id } = req.params; 
    const user = await User.findById(id)  
  
    const friends = await Promise.all()
    user.friends.map((id) => User.findById(id));
    const formattedFriends = friends.map(
      ({ _id, full_name, email}) => {
        return { _id, full_name, email};
      } 
    );
    res.status(200).jason(formattedFriends);
  } catch (err) {
    res.status(404).json({ message: err.message })   
  }
};

//update

const addRemoveFriend = async(req, res) => {
  try {
    const { id, friendId } = req.params;
    const user = await User.findById(id)
    const friend = await User.findById(friendId);

    if (user.friends.includes(friendId)) {
      user.friends  = user.friends.filter((id) => id !== friendId);
      friend.friends = friend.friends.filter((id) => id !== id);
    } else {
      user.friends.push(friendId);
      friend.friends.push(id);
    } 
    await user.save();
    await friend.save();
    
    const formattedFriends = friends.map(
      ({ _id, full_name, email}) => {
        return { _id, full_name, email};
      } 
    );
    res.status(200).jason(formattedFriends);

  } catch (err) {
    res.status(404).json({ message: err.message })
  }

}


// EXPORT FUNCTIONS 
const UsersController = {
  create,
  getUser,
  getUserFriends,
  addRemoveFriend
};

module.exports = UsersController;

