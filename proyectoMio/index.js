const express = require("express")
server = express()
PORT=3000

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

server.get("/usuarios",(req, res)=>{
res.json(users)
})

server.get("/usuarios/:id",(req, res)=>{
const id = Number(req.params.id)
for(let i =0; i<users.length; i++){
    if(users[i].id===id){
      res.json(users[i])
    }
}
})

server.post("/usuarios")

server.listen(PORT,()=>{
console.log("El servidor corre en el puerto " + PORT)
})