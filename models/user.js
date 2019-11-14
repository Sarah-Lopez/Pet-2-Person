const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const bcrypt = require('bcryptjs');
const bcrypt = require('bcrypt');
// const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  isDeleted: { type: Boolean, default: false}
});

// generating a hash
userSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;