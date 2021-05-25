const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema({
  name: { required: true, type: String },
});

module.exports = mongoose.model("category", categorySchema);
