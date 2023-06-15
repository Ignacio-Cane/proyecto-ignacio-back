const express = require('express');
const router=express.Router();
const upload= require('../multer/cargaImagen');
const {verificacionUsuario}= require("../controllers/usuariosControllers")
const {
     todosLosProductos,
     traerUnProducto,
     cargarProducto,
     eliminarProducto,
     actualizarProducto
}=require('../controllers/productosControllers');


router.get("/allProducts",todosLosProductos);
router.get("/oneProducts/:products",traerUnProducto);
router.post("/addProducts",upload.single('imagen'),cargarProducto);
router.delete("/deleteProducts",eliminarProducto);
router.put("/addProducts/:id",actualizarProducto);

module.exports=router  