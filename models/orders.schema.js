const mongoose = require("mongoose");
const { Schema } = mongoose;

const ordersSchema = new Schema({
    product: { type: mongoose.Schema.Types.ObjectId,ref:'product' },
    quantity: {required: true,  default: 1},
    mrp: { required: true, type: Number },
    
}); 
module.exports = mongoose.model("orders", ordersSchema);
    