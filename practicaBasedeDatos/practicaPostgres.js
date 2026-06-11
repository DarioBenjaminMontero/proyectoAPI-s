const express = require("express");
const servidor = express();
const PORT = 3300;

const { Client } = require("pg")

const client = new Client({
    host: "localhost",
    database: "prueba",
    user: "postgres",
    password: "1234",
    port: 5432
})
client.connect();
servidor.use(express.json())

servidor.get('/users', async (req, res) => {

    const resultado = await client.query('SELECT * FROM users;')
    res.status(200).json(resultado.rows)
})

servidor.get('/users/:id', async (req, res) => {
    idPuesto = req.params.id
    const resultado = await client.query(`SELECT * FROM users WHERE id = ${idPuesto}`)
    res.status(200).json(resultado.rows);
})

servidor.get('/hobbies', async (req, res) => {
    const consulta = await client.query('SELECT * FROM hobbies;')
    res.status(200).json(consulta.rows)
})

servidor.get('/usuarios/:id/hobbies', async (req, res) => {
    const arrayHobbies = []
    const objeto = {}
    const consulta = await client.query(`SELECT users.firstname , 
        hobbies.hobbieName 
        FROM users INNER JOIN usershobbies 
        ON users.id = usershobbies.idUser
         INNER JOIN hobbies ON usershobbies.idHobbie = hobbies.id 
         WHERE users.id = ${req.params.id}`);
    console.log(consulta.rows);
    objeto.firstname = consulta.rows[0].firstname     
    for (let i = 0; i < consulta.rows.length; i++) {
        arrayHobbies.push(consulta.rows[i].hobbiename)
        objeto.hobbies = arrayHobbies
    }
    // 0 = primera fila => consulta.rows[0] => benjamin   futbol
    //1 = segunda fila => consulta.rows[1] => benjamin   boxeo
 // consulta.rows[0].firstname => benjamin
 //consulta.rows[0].hobbiename => futbol
 //consulta.rows[1].hobbiename => boxeo
    res.status(200).json(objeto)
})

servidor.get('/usuarios/hobbies', async (req, res) => {
    let arrayHobbies = []
    const arrayUsuarios = []
    let usuarioactual = null
    consulta = await client.query(`SELECT users.id, users.firstname , hobbies.hobbieName 
        FROM users INNER JOIN usershobbies ON users.id = usershobbies.idUser 
        INNER JOIN
         hobbies ON usershobbies.idHobbie = hobbies.id 
         ORDER BY users.id;`)
    for (let i = 0; i < consulta.rows.length; i++) {
        if (usuarioactual == consulta.rows[i].id) {
            arrayHobbies.push(consulta.rows[i].hobbiename)
        }
        else {
            if (usuarioactual != null) {
                arrayUsuarios.push({
                    id: consulta.rows[i - 1].id,
                    firstname: consulta.rows[i - 1].firstname,
                    hobbies: arrayHobbies
                })
            }
            arrayHobbies = [consulta.rows[i].hobbiename]
            usuarioactual = consulta.rows[i].id
        }
    } 
    if (consulta.rows.length > 0) {
        arrayUsuarios.push({
            id: consulta.rows[consulta.rows.length - 1].id,
            firstname: consulta.rows[consulta.rows.length - 1].firstname,
            hobbies: arrayHobbies
        })
    }
    res.status(200).json(arrayUsuarios)
})

servidor.listen(PORT, () => {

    console.log("hola");
})
