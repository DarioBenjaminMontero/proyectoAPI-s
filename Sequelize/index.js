const { sequelize } = require("./BD/baseDeDatos.js")
const express = require("express")
require("./modelos/hospitalesModelos.js")
const rutasHospitales = require("./routes/hospitalesRutas.js")
PUERTO = 3300
const servidor = express()
servidor.use(express.json())
servidor.get("/", (req, res)=>{
    res.status(200).json({message: "todo joya pa"})
})
servidor.use("/hospitales", rutasHospitales)
servidor.listen(PUERTO, async() =>{
    await sequelize.sync({alter: true})
})