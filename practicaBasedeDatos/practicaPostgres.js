const express = require("express");
const servidor = express();
const PORT = 3300;

const { Client } = require("pg")

const client = new Client ({
host : "localhost",
database: "prueba",
user: "postgres",
password: "1234",
port: 5432
})

servidor.use(express.json())

servidor.get('/users', async(req, res)=>{

    const resultado = await client.query('SELECT * FROM users;')
    res.status(200).json(resultado.rows)
})

servidor.get('/users/:id', async(req, res) =>{
idPuesto = req.params.id
const resultado = await client.query(`SELECT * FROM users WHERE id = ${idPuesto}`)
res.status(200).json(resultado.rows);
})

servidor.listen(PORT, ()=>{

    console.log("hola");
})