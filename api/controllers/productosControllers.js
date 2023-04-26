const infoProd= require ('../infoProduc.json');


const todosLosProductos=(req,res)=>{
    let infoJSON=JSON.stringify(infoProd)
    res.send(infoJSON)
    
}
const agregarProductos=(req,res)=>{
    const {nombre}= req.body;
    const {precio}=req.body;
    
    infoProd.push({nombre:nombre, precio:precio})
    
    res.redirect("http://localhost:3000/") 
}
module.exports={agregarProductos,todosLosProductos}