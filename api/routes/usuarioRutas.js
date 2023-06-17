const express = require('express');
const router=express.Router();

const {
    guardarUsuario,
    login,
    verificacionUsuario
}=require('../controllers/usuariosControllers');

//POST
router.post("/check",guardarUsuario);
router.post("/login",login,verificacionUsuario);

module.exports=router;