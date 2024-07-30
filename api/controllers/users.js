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

const UsersController = {
  create: create,
};

module.exports = UsersController;
