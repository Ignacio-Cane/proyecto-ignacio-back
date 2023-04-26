const express = require('express');
const app =express();
const cors=require('cors');
const puerto =4000;



app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));

app.use('', require('./routes/productosRutas'));
//app.use('/usuario', require('./routes/usuarioRutas'));



//PUERTO
app.listen(puerto, ()=>{
    console.log(`Corriendo el puerto ${puerto}`)
}); 