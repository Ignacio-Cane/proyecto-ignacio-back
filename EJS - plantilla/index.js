const express= require('express');
const app= express();
const path= require('path');
const port=3001;
const {traerProductosApi} =require('./utils/funciones')

app.set('views', path.join(__dirname,"views"));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,"public")));


app.get('/',(req,res)=>{
    traerProductosApi()
    res.render('pages/home')//configuramos que las vistsa esten en la carpeta views, solo colocar el ruteo desde dicha carpeta
})


app.listen(port,()=>{
    console.log(`corriendo en el localhost ${port}`)
})