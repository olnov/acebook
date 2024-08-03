const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  full_name: {type: String, required: true},
  email: { type: String, required: true },
  password: { type: String, required: true },
  profile_image: { type: Buffer, select: true },
  user_bio: {type: String, maxLength: 300 },  
});


// This is pre-save hook to hash the password before saving

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  try {
    // Generate a salt
    const salt = await bcrypt.genSalt(10);
    // Hash the password along with the salt
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

// This is method to compare a given plain text password with the database hash
// It is uesed in authentication.js controller to validate passowrds

UserSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};



const User = mongoose.model("User", UserSchema);

module.exports = User;
