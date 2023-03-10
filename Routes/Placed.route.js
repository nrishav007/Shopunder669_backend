const express=require("express");
const PlacedModel = require("../Models/Placed.model");
const placed=express.Router();
placed.use(express.json());

placed.get("/",async(req,res)=>{
  let val=req.body.userID;
    res.send(await PlacedModel.find({userID:val}));
});
placed.get("/todaysorder",async(req,res)=>{
  const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let current = `${day}-${month}-${year}`;
    res.send(await PlacedModel.find({orderdate:current}));
});
placed.get("/allorder",async(req,res)=>{
    res.send(await PlacedModel.find());
});

placed.post("/create", async (req, res) => {
    try {
      const order=await PlacedModel.create(req.body);
      res.status(200).send({ msg: "Order Placed",data:order });
    } catch (e) {
      console.log(e);
      res.status(400).send({ msg: "Not Found" });
    }
  });
  
  placed.patch("/update/:userID", async (req, res) => {
    try {
      const userID = req.params.userID;
      await PlacedModel.findByIdAndUpdate(userID,req.body);
      res.status(200).send({ msg: "Placed Modified" });
    } catch (e) {
      console.log(e);
      res.status(400).send({ msg: "Not Found" });
    }
  });
  placed.patch("/review/:userID", async (req, res) => {
    try {
      const userID = req.params.userID;
      pyld=req.body.rv;
      await PlacedModel.findByIdAndUpdate(userID,pyld);
      res.status(200).send({ msg: "Review Modified" });
    } catch (e) {
      console.log(e);
      res.status(400).send({ msg: "Not Found" });
    }
  });
  placed.delete("/delete/:userID", async (req, res) => {
      try {
        const userID = req.params.userID;
        await PlacedModel.findOneAndDelete({_id:userID})
        res.status(200).send({ msg: "Placed deleted" });
      } catch (e) {
        console.log(e);
        res.status(400).send({ msg: "Not Found" });
      }
    });

module.exports=placed;