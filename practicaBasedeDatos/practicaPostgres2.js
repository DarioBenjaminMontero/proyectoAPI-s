const express = require('express');
servidor = express();
PORT = 3300;
servidor.use(express.json())

const { Client } = require('pg');

const cliente = new Client ({
host: "localhost",
user: "postgres",
password: "1234",
database: "prueba",
port : 5432
})
cliente.connect();

servidor.get('/usuarios', async(req, res)=>{
  const consulta = await cliente.query('SELECT firstname FROM users;')
 res.status(200).json(consulta.rows)
})



servidor.listen(PORT,()=>{

  console.log("servidor corriendo")

})