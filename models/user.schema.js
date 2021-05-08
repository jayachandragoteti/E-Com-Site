const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  phone: String,
});

const User = (module.exports = mongoose.model("user", userSchema));
