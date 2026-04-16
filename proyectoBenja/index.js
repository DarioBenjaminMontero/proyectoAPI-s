const express = require('express');
const app = express();

let usuarios = [
  { nombre: "Dario", edad: 17 }
];

app.get("/usuarios",(req, res) =>{   
res.json(usuarios);

})

app.post("/usuarios",(req, res) =>{
    const Usuario = req.query.nombre
    const edadUsuario = parseInt(req.query.edad)
    const nuevoUsuario = { nombre: Usuario, edad: edadUsuario }
    usuarios.push(nuevoUsuario);
    res.json({ mensaje: "Usuario agregado", usuario: nuevoUsuario });
})
app.delete("/usuarios/:id",(req, res) =>{
    const id = parseInt(req.params.id)
    usuarios.splice(id, 1)
    res.json({ mensaje: `Usuario ${id} eliminado` });
})

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});