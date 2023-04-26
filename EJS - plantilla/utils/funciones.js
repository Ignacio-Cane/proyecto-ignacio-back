const request= require('postman-request');

const traerProductosApi=()=>{
    request('http://localhost:4000/productos', (error,res,body)=>{
        console.log('ERROR: ' + error);
        console.log('RES: ' + res);
        console.log('BODY: ' + body);

    })

}
module.exports={traerProductosApi}