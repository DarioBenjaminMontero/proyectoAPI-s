const express = require("express");
const server = express()
PORT = 3000

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

server.get("/users", (req, res) => {
    usuariosActivos = []

    for(let i = 0; i<users.length; i++){

if(users[i].isActive === true){

usuariosActivos.push(users[i])
}

    }
    res.json(usuariosActivos)
})

server.get("/users/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const user = users.find(usuario => usuario.id == id)
    res.json(user)
})

server.post("/users", (req, res) => {
    const { firstname, lastname, isActive, age, hobbis } = req.body
    newId = users[0].id
    for (let i = 0; i < users.length; i++) {
        if (users[i].id > newId) {
            newId = users[i].id
        }
    }
    const nuevoUsuario = {
        id: newId + 1,
        firstname,
        lastname,
        isActive,
        age,
        hobbis
    }
    users.push(nuevoUsuario)
    res.json({ mensaje: "Usuario creado, el id es " + nuevoUsuario.id })
})

server.put("/users/:id", (req, res) => {
    id = parseInt(req.params.id)
    const { firstname, lastname, isActive, age, hobbis } = req.body
    let user = {}
    let idex = 0
    for (let i = 0; i < users.length; i++) {

        if (users[i].id === id) {
            user = users[i]
            index = i

        }

    }
    user.firstname = firstname
    user.lastname = lastname
    user.isActive = isActive
    user.age = age
    user.hobbis = hobbis
    users[index] = user
    res.json({mensaje: "usuario modificado en su totalidad", usuario: users[index]})
})

server.patch("/users/:id", (req, res) => {

    const id = Number(req.params.id)
    const { firstname, lastname, isActive, age, hobbis } = req.body
    var user = {}
    var index = 0
    for (var i = 0; i < users.length; i++) {

        if (users[i].id === id) {
            user = users[i]
            index = i
        }
    }

    user.firstname = firstname ? firstname : user.firstname
    user.lastname = lastname ? lastname : user.lastname
    user.isActive = isActive ? isActive : user.isActive
    user.age = age ? age : user.age
    user.hobbis = hobbis ? hobbis : user.hobbis

    users[index] = user
    res.json({ mensaje: "Usuario modificado parcialmente", usuario: users[index] })

})

server.delete("/users/:id", (req, res) => {
const id = Number(req.params.id)
for(let i = 0; i<users.length; i++){
if(users[i].id === id){
    users[i].isActive = false
}
}

let usuariosActivos=[]
for(let i = 0; i<users.length; i++){


if(users[i].isActive === true){
usuariosActivos.push(users[i])
}

}
res.json({mensaje: "Usuario eliminado", usuarios: usuariosActivos})
})

server.listen(PORT, () => {

    console.log("el server corre en el puerto " + PORT)

})