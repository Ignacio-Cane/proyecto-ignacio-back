const express = require('express');
const router=express.Router();

const {
    traerProductos,
    traerProducVeget,
    traerProducCeliaco
}=require('../controllers/productosControllers')

//GET
router.get("",traerProductos);
router.get("/vegetariano",traerProducVeget);
router.get("/celiaco",traerProducCeliaco);

module.exports=router