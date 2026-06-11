const express = require('express')
const server = express()
const PORT = 3000
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

server.get("/users", (req,res)=>{
res.status(200).json(users)
})

server.get("/users/:id", (req,res)=>{
    id = Number(req.params.id)
    user = users.find(user => user.id === id)
res.status(200).json(user)
})

server.post("/users", (req,res)=>{
const {firstname,lastname,isActive,age,hobbis} = req.body
nuevoId = users[0].id
for(let i = 0; i<users.length; i++){
    if(users[i].id > nuevoId){
      nuevoId= users[i].id
    }
}
nuevoUsuario = {
id: nuevoId + 1,
firstname,
lastname,
isActive,
age,
hobbis
}
users.push(nuevoUsuario)
res.status(201).json({"mensaje":"usuario creado exitosamente", "el usuario tiene el id": nuevoId+1, "todos los usuarios": users})
})

server.put("/users/:id", (req,res)=>{
    const id = Number(req.params.id)
    const {firstname,lastname,isActive,age,hobbis} = req.body
    const index = users[0].id
    const user = {}
    for(let i = 0; i<users.length;i++){
        if(users[0].id === id){
            user = users[i]
            index = i
        }
    }
    user.firstname = firstname
    user.lastname = lastname
    user.isActive = isActive
    user.age = age
    user.hobbis = hobbis
    users[index]= user
    res.status(200).json({"mensaje":"usuario cambiado en su totalidad", "user": user})
})
server.patch("/users/:id", (req,res)=>{
    const id = Number(req.params.id)
    const {firstname,lastname,isActive,age,hobbis} = req.body
    index = users[0].id
    user = {}
    for(let i = 0; i<users.length; i++){
        if(users[i].id === id){
            user = users[i]
            index = i
        }
    }
    user.firstname = firstname ? firstname: user.firstname
    user.lastname = lastname ? lastname : user.lastname
    user.isActive = isActive ? isActive : user.isActive
user.age = age ? age : user.age
user.hobbis = hobbis ? hobbis : user.hobbis
users[index]=user
res.status(200).json({"mensaje":"usuario modificado parcialmente", "usuario": users[index]})
})
server.delete("/users/:id", (req, res)=>{

const id = Number(req.params.id)
for(let i = 0; i<users.length; i++){
    if(users[i].id === id){
        users[i].isActive = false
        res.status(200).json({"mensaje":"usuario eliminado correctamente", "usuarios":users})
    }
}

})


server.listen(PORT, ()=>{
console.log("el servidor esta corriendo en el puerto" + PORT)

})