const dbConnection = require('../config/dataBase');
const jwt=require('jsonwebtoken');
require('dotenv').config();
const password= process.env.PASS_JWT;
const bcrypt =require('bcrypt');

const guardarUsuario =async(req,res)=>{
    const {usuario, contraseña} = req.body;
    

    const passEncriptada= await bcrypt.hash(contraseña, 10);

    dbConnection.query('INSERT INTO usuario(usuario,contraseña)VALUES(?,?)',[usuario, passEncriptada],(error,data)=>{
        if(error){
            res.send(error);
        }else{
            res.json({
                mensaje:"usuario registrado",
                contraseña:passEncriptada
            })         
        }
    })
}

const login=(req,res)=>{

    const {usuario, contraseña}= req.body;
    

    dbConnection.query('SELECT * FROM usuario WHERE usuario=?',[usuario],async(error,data)=>{
        if(error){
            res.send('Error en el servidor ' + error)
        }else{
            if(data.length == 0){
               return res.status(204).json('Usuario no registrado o incorrecto')
            }else{
                console.log(data);
                let info= data[0];
                const contraseñaOk=await bcrypt.compare(contraseña,info.contraseña)
                if(contraseñaOk == true){
                    console.log('Usuario y contraseña Correcta')

                    jwt.sign({usuario},password,{expiresIn:'30m'},(error,token)=>{
                        if(error){
                            res.send(error)
                        }else{
                            res.json({
                                mensaje:"usuario Logeado",
                                tokenLogin: token
                            });                    
                        }
                    })
                }else{
                    console.log('Contraseña incorrecta');
                    res.status(401).json({mensaje:'Contraseña incorrecta'})
                }  
            }
        }
    })
};   

const verificacionUsuario=(req,res,next)=>{
    
    const authoToken= req.headers.authorization;
    const token= authoToken.split(' ').pop();
    //console.log(token);
    //next();
    jwt.verify(token,password,(error, data)=>{
        if(error){
            res.send(error)
        }else{
            req.auth=data.usuario //agrega un campo y guardanos un payload, en este caso el nombre  del usuario 
            next()
        }
    })
    };

    // const recuperarContraseña=(req,res)=>{
    //     const {nombre_de_usuario, contraseña} = req.body;
    //     console.log(nombre_de_usuario,contraseña);
    //     dbConnection.query('UPDATE usuario SET contraseña=? WHERE nombre_de_usuario ',[nombre_de_usuario,contraseña],(error,data)=>{
    //         if(error){
    //             console.log(error)
    //         }else{
    //             res.send(data)
    //         }
    //     })

    // };

module.exports={guardarUsuario,login,verificacionUsuario}