const { sequelize } = require("./BD/baseDeDatos.js")
const express = require("express");
const router = require("./routes/hospitalesRutas.js")
const router2 = require("./routes/doctoresRutas.js")
PORT = 3300
require("./modelos/relacionDoctoresHospitales.js")
const servidor = express()
servidor.use(express.json())

servidor.use("/hospitales", router)
servidor.use("/doctores",  router2)


servidor.listen(PORT, async ()=>{
await sequelize.sync({ alter: true });
console.log("el servidor corre xd")
})