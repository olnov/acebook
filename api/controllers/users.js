const User = require("../models/user");

const create = (req, res) => {
  const full_name = req.body.full_name;
  const email = req.body.email;
  const password = req.body.password;

  console.log("HERE!!");
  console.log("Full name:" + full_name);
  console.log("Email:" + email);
  console.log("Password:" + password);


  const user = new User({ full_name, email, password });
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

// Function to expose user information by id
const getUserById = async (req, res) => {
  const userId = req.params.user_id;
  const user = await User.findById(userId);
  if (!user) {
    res.status(400).json({ message: "User does not exist"});
    console.log("Can't find user with id: ", {userId});
  } else {
    res.status(200).json({ id: user.id, full_name: user.full_name, email: user.email, user_bio: user.user_bio});
  }
};


// Function to update user data. In the first iteration limited to user_bio.
const updateUserById = async (req, res) => {
  const userId = req.params.user_id;
  const update = { user_bio: req.body.user_bio }
  const user = await User.findByIdAndUpdate(userId, update, { new:true });
  if (!user) {
    res.status(400).json({ message: "Something went wrong. Please check the logs."});
    console.log("Can't find user with id: ", {userId});
  } else {
    res.status(200).json({message: "Updated", udatedUser: user });
  }
};

const UsersController = {
  create: create,
  getUserById: getUserById,
  updateUserById: updateUserById,
};

module.exports = UsersController;
