const express = require('express');
const router=express.Router();

const {
    guardarUsuario,
    login,
    verificacionUsuario,
    recuperarContraseña
}=require('../controllers/usuariosControllers');

//POST
router.post("/check",guardarUsuario);
router.post("/login",login,verificacionUsuario);
router.put("/forget", recuperarContraseña);
module.exports=router;