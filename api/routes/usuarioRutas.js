const express = require('express');
const router=express.Router();

const {
    obtenerDatoUsuario,
    verificacionUsuario
}=require('../controllers/usuariosControllers');

router.get("/:dato",obtenerDatoUsuario);

//POST
router.post('/usuarioIngresado',verificacionUsuario);

module.exports=router;