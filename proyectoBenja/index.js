const express = require('express');
const app = express();

const usuarios = [
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

app.use(express.json());

app.get("/usuarios",(req, res) =>{   
res.json(usuarios);

})
app.get("/usuarios/:id",(req, res)=>{
const id = parseInt(req.params.id)

const user = usuarios.find(obj => obj.id == id)

res.json(user)

})

app.post("/usuarios",(req, res) =>{

    usuarios.push(req.body);
    res.json({ mensaje: "Usuario agregado", mensaje2: "todos los usuarios", usuarios: usuarios });
})
app.delete("/usuarios/:id",(req, res) =>{
    const id = parseInt(req.params.id)
    const users = usuarios.findIndex(user => user.id ==id )
    if(users !==-1){

      usuarios.splice(users, 1)

    }
    res.json({ mensaje: `Usuario ${users} eliminado` });
})

app.put("/usuarios", (req, res)=>{
    
})




app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});