const mongoose=require("mongoose");
const CuponSchema=mongoose.Schema({
    cuponcode:String,
    discount:Number,
    minimumPurchase:Number
});
const CuponModel=mongoose.model("shop669cupon",CuponSchema);
module.exports=CuponModel;