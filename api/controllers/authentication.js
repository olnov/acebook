const User = require("../models/user");
const { generateToken } = require("../lib/token");

const createToken = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await User.findOne({ email: email });
  if (!user) {
    console.log("Auth Error: User not found");
    return res.status(401).json({ message: "User not found" });
  }

  const isMatch = await user.comparePassword(password); // Assuming user model has a comparePassword method
  if (!isMatch) {
    console.log("Auth Error: Passwords do not match");
    return res.status(401).json({ message: "Password incorrect" });
  }

  const token = generateToken(user.id);
  res.status(201).json({ token: token, message: "OK" });
};

const AuthenticationController = {
  createToken: createToken,
};

module.exports = AuthenticationController;
