const express = require("express");
const servidor = express();
const PORT = 3300;
const mysql = require("mysql2");
const { Client } = require("pg")

const conexion = mysql.createConnection (
{
host: "localhost", //ip o dominio.
database: "prueba", // NOMBRE DE LA BASE DE DATOS
user: "root", //USUARIO, CASI SIEMPRE POSTGRES
password: "", //CONTRASEÑA, CASI SIEMPRE 1234
port: 3306 // ESTE ES EL PUERTO QUE ESTA ESCUCHANDO CONSULTAS DE BASE DE DATOS
}

)

servidor.use(express.json())

servidor.get('/users',(req,res) =>{
conexion.query('SELECT * FROM usuarios;', (err, results) =>{
res.status(200).json(results)
})
})

servidor.listen(PORT, ()=>{
console.log("rana flaca con magia negra y barro")

})


