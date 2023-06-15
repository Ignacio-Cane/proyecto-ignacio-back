//const infoProd= require ('../infoProduc.json');
//const{cargaProd}=require('../utils/funcionesDB')
const dbConnection=require("../config/dataBase");


const todosLosProductos=(req,res)=>{
    dbConnection.query('SELECT * FROM producto',(error,data)=>{
        if(error){
            res.status(500).json({mensaje:"problemas en la peticion del servidor"})
        }else{
            res.send(data)
        }
    });
    
}
const traerUnProducto=(req,res)=>{
    const titulo= req.params.products;
    console.log(titulo);
    dbConnection.query('SELECT * FROM producto WHERE nombre=?',[titulo],(error,data)=>{
        if(error){
            res.send(error)
        }else{
            res.send(data)
        }
    }); 
};


const cargarProducto=(req,res)=>{
    //const usuario= req.auth
    const {nombre,precio}=req.body;
    const imagen='http://localhost:4000/public/'+req.file.filename;
    console.log(imagen)
    console.log(req.body)
    dbConnection.query('INSERT INTO producto(nombre,precio,imagen)VALUES(?,?,?)',[nombre,parseInt(precio),imagen],(error,data)=>{
        if(error){
            res.send(error);
        }else{
            console.log(data);
            //res.redirect("/allProducts")
            res.status(200).json('Producto cargado exitosamente');
        }
    })
    
};

const eliminarProducto=(req,res)=>{
    const {nombre}= req.body;

    dbConnection.query('DELETE FROM producto WHERE nombre=?',[nombre],(error,mensajeOk)=>{
        if(error){
            res.send(error);
        }else{
            res.status(200).json("El producto  se elimino correctamente");
        }
    })
};

const actualizarProducto=(req,res)=>{
    const id=req.params.id;
    dbConnection.query(`UPDATE  producto SET  ? WHERE id=?`,[req.body,id],(error,data)=>{
            if(error){
                res.send(error)
            }else{
                console.log("modificadoo")
                res.send("ok")
            }
        });
    }

module.exports={
    todosLosProductos,
    traerUnProducto,
    cargarProducto,
    eliminarProducto,
    actualizarProducto
} 