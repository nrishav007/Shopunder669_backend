const mongoose=require("mongoose");
const ProductSchema=mongoose.Schema({
    image:String,
    name:String,
    category:String,
    description:String,
    price:Number,
    offerPrice:Number,
    review:Array
});
const ProductModel=mongoose.model("shop669prod",ProductSchema);
module.exports=ProductModel;