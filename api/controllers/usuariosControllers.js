
const usuarioInfo= require('../usuariosInfo.json');

const obtenerDatoUsuario=(req,res)=>{
    let datoParam=req.params.dato;
    let usuarioRquerido= usuarioInfo.find((dato)=>dato.usuario == datoParam);
    res.send(usuarioRquerido)
};   

const verificacionUsuario=(req,res)=>{
    let infoForm=req.body;
    console.log(infoForm);

    let usuarioRegistrado= usuarioInfo.find((dato)=>dato.usuario === infoForm.usuario);

    console.log(usuarioRegistrado);
     if(usuarioRegistrado !== undefined){
        if(infoForm.password === usuarioRegistrado.password){
           res.send("El usuario ya es correcto") 
        }else{
            res.send('password incorrecta')
        }

     }else{
         res.send("No encontramos el usuario registrado")
     }
    };

module.exports={obtenerDatoUsuario,verificacionUsuario}