const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: { required: true, type: String },
  description: String,
  mrp: { required: true, type: Number },
  sp: Number,
  category: { type: mongoose.Schema.Types.ObjectId,ref:'category' },
  images: { required: true, type: Array },
  highlights: Array,
  ratings: { required: true, type: Map }
});
module.exports = mongoose.model("product", productSchema);
