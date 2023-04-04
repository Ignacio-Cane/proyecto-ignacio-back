const express = require('express');
const app =express();
const puerto =4000;



app.use(express.json());

app.use('/productos', require('./routes/productosRutas'));
app.use('/usuario', require('./routes/usuarioRutas'));



//PUERTO
app.listen(puerto, ()=>{
    console.log(`Corriendo el puerto ${puerto}`)
}); 