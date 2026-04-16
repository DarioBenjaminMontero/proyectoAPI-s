const express = require("express")
const PORT = 3000
server = express()
server.use(express.json())
const users = [
    {
        id: 1,
        firstname: 'Marcos',
        lastname: 'Costa',
        isActive: true,
        age: 25,
        hobbis: ["Karate", "Scout", "Pesca", "Escalada"]
    },
    {
        id: 2,
        firstname: 'Elena',
        lastname: 'Zamora',
        isActive: true,
        age: 32,
        hobbis: ["Lectura", "Yoga", "Fotografía"]
    },
    {
        id: 3,
        firstname: 'Julián',
        lastname: 'Ríos',
        isActive: false,
        age: 19,
        hobbis: ["Gaming", "Ajedrez", "Ciclismo"]
    },
    {
        id: 4,
        firstname: 'Sofía',
        lastname: 'Méndez',
        isActive: true,
        age: 28,
        hobbis: ["Cocina", "Pintura", "Tenis"]
    },
    {
        id: 5,
        firstname: 'Ricardo',
        lastname: 'Gómez',
        isActive: false,
        age: 45,
        hobbis: ["Carpintería", "Jardinería", "Viajes"]
    }
];

server.get('/users', (req, res) => {
    usersActives = []

    for (let i = 0; i < users.length; i++) {
        if (users[i].isActive) {
            usersActives.push(users[i])
        }
    }

    res.json(usersActives)


})

server.get('/users/:id', (req, res) => {

    const id = Number(req.params.id)
    for (let i = 0; i < users.length; i++) {

        if (users[i].id === id) {

            user = users[i]

        }
        

    }
    res.json(user)

})

server.post('/users', (req, res) => {

    const { firstname, lastname, isActive, age, hobbis } = req.body

    newId = users[0].id
    for (let f = 0; f < users.length; f++) {

        if (users[f].id > newId) {
            newId = users[f].id
        }
    }

    const usuarioNuevo = {
        id: newId + 1,
        firstname,
        lastname,
        isActive,
        age,
        hobbis
    }

    users.push(usuarioNuevo)
    res.status(201).json({ message: "usuario creado wei su id es " + newId })

})

server.put('/users/:id', (req, res) => { //necesitamos extraer el id
    const id = Number(req.params.id)
    const { firstname, lastname, isActive, age, hobbis } = req.body

    var user = {}
    var index = 0
    for (let i = 0; i < users.length; i++) {

        if (users[i].id === Number(id)) {
            user = users[i]
            index = i
        }

    }

    user.firstname = firstname
    user.lastname = lastname
    user.age = age
    user.isActive = isActive
    user.hobbis = hobbis

    users[index] = user

    res.json(users)


})

server.patch('/users/:id', (req, res) => { //necesitamos extraer el id
    const id = Number(req.params.id)
    const { firstname, lastname, isActive, age, hobbis } = req.body

    var user = {}
    var index = 0
    for (let i = 0; i < users.length; i++) {

        if (users[i].id === Number(id)) {
            user = users[i]
            index = i
        }

    }

    user.firstname = firstname ? firstname : user.firstname //basicamente esto pregunta: escribiste algo en firstname? si si entonces se cambia a la variable
    //si no, entonces lo deja igual
    user.lastname = lastname ? lastname : user.lastname
    user.age = age ? age : user.age
    user.isActive = isActive ? isActive : user.isActive
    user.hobbis = hobbis ? hobbis : user.hobbis

    users[index] = user

    res.json(users)


})

server.delete('/users/:id', (req, res) => {
    let index = 0
    var user = {}
    const id = Number(req.params.id)
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
           
            users[i].isActive = false
            res.json({ message: "usuario eliminado" })
        }
    }


})
server.listen(PORT, () => {

    console.log("esta")
})