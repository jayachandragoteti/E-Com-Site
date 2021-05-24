const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  phone: String,
  password: {type: String, required: true},
});

module.exports = mongoose.model("user", userSchema);
