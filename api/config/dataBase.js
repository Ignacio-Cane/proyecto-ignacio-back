const mysql= require('mysql2');
require('dotenv').config();
dataBaseInfo={
    host: process.env.HOST,
    user:process.env.DB_USER,
    database:process.env.DB,
    password:process.env.PASS_SEGURA
};

const dbConnection=mysql.createConnection(dataBaseInfo);

dbConnection.connect((error)=>{
    if(error){
        console.log(error)
    }else{
        console.log("Coneccion con DB Mysql exitosa!!")
    }
});

module.exports=dbConnection;