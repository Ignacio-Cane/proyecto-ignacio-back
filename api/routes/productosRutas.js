const express = require('express');
const router=express.Router();

const {
     todosLosProductos,
     agregarProductos
   

}=require('../controllers/productosControllers')

//GET
router.get("/getProduct",todosLosProductos);
router.post("/addProducts",agregarProductos)

module.exports=router 