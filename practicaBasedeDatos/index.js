const express = require("express");
const servidor = express();
const PORT = 3300;

const { Client } = require("pg")

const client = new Client (
{
host: "localhost", //ip o dominio.
database: "prueba", // NOMBRE DE LA BASE DE DATOS
user: "postgres", //USUARIO, CASI SIEMPRE POSTGRES
password: "1234", //CONTRASEÑA, CASI SIEMPRE 1234
port: 5432 // ESTE ES EL PUERTO QUE ESTA ESCUCHANDO CONSULTAS DE BASE DE DATOS
}

)

servidor.use(express.json())

servidor.get('/users', async (req,res) =>{
const result = await client.query('SELECT * FROM users;')
res.status(200).json(result.rows) //no me mandes toda la base de datos, mandame solo las filas
})

servidor.listen(PORT, ()=>{
console.log("rana flaca con magia negra y barro")

})


