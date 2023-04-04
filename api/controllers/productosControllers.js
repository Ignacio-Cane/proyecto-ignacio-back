const infoProd= require ('../infoProduc.json');

const traerProductos=(req,res)=>{
    let info= infoProd;
    res.send(info);
}
const traerProducVeget=(req,res)=>{

    res.send('producto vegetariano');
}
const traerProducCeliaco=(req,res)=>{
    
    res.send('producto celiaco');
}
module.exports={traerProductos,traerProducVeget,traerProducCeliaco}