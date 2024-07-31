const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  full_name: {
    type: String, 
    required: true},
  email: { 
    type: String, 
    required: true, 
    unique: true
  },
  password: { 
    type: String, 
    required: true 
  },
    friends: {
      type: Array,
      default: []
    },
}, {timestamps: true}
);


// [!Work in progress!] Pre-save hook to hash the password before saving

// UserSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) return next();

//   try {
//     // Generate a salt
//     const salt = await bcrypt.genSalt(10);
//     // Hash the password along with the salt
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
//   } catch (err) {
//     next(err);
//   }
// });

// [!Work in progress!] Method to compare a given password with the database hash
// UserSchema.methods.comparePassword = function (candidatePassword) {
//   return bcrypt.compare(candidatePassword, this.password);
// };



const User = mongoose.model("User", UserSchema);

module.exports = User;
