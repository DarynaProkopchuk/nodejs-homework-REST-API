const express = require ("express");
const router =express.Router();
 // GET/api/v1/products
 router.get("/", (req,res)=>{
res.json({message: "product list"})
 });
 //GET/api/v1/products/2
 router.get ("/:id", (req,res)=>{

 });
 //Post /api/v1/products
 router.post ("/", (req,res)=>{

 })
 module.exports =router;