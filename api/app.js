require('dotenv').config();
const express = require('express');
const app =express();
const cors=require('cors');
const puerto=4000;
const routesProductos=require('./routes/productosRutas');
const routesUsuario=require('./routes/usuarioRutas');

require('./config/dataBase');


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use('/public',express.static('./imagenes'));
app.use('/productos',routesProductos );
app.use('/usuario',routesUsuario);

 
//PUERTO
app.listen(puerto, ()=>{
    console.log(`Corriendo el puerto ${puerto}`)
});  