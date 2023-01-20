const express=require("express");
const CuponModel = require("../Models/Cupon.model");
const Cupon=express.Router();
Cupon.use(express.json());

Cupon.get("/",async(req,res)=>{
    res.send(await CuponModel.find());
});

Cupon.post("/create", async (req, res) => {
    try {
      await CuponModel.create(req.body);
      res.status(200).send({ msg: "Cupon Added" });
    } catch (e) {
      console.log(e);
      res.status(400).send({ msg: "Not Found" });
    }
  });
  
  Cupon.patch("/update/:userID", async (req, res) => {
    try {
      const userID = req.params.userID;
      await CuponModel.findOneAndUpdate({id:userID}, req.body);
      res.status(200).send({ msg: "Cupon Modified" });
    } catch (e) {
      console.log(e);
      res.status(400).send({ msg: "Not Found" });
    }
  });
  
  Cupon.delete("/delete/:userID", async (req, res) => {
      try {
        const userID = req.params.userID;
        await CuponModel.findOneAndDelete({_id:userID})
        res.status(200).send({ msg: "Cupon deleted" });
      } catch (e) {
        console.log(e);
        res.status(400).send({ msg: "Not Found" });
      }
    });

module.exports=Cupon;