const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema({
  address: String,
  location: String,
  city: String,
  state: String,
  pincode: String,
  orderdate: String,
  mobile: String,
  email: String,
  name: String,
  cartdata: Array,
  price:String
});
const PlacedModel = mongoose.model("shop669order", ProductSchema);
module.exports = PlacedModel;
