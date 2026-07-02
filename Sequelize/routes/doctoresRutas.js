const { crearDoctores } = require("../controladores/doctoresControladores.js")
const express = require("express")
const router = express.Router()

router.post("/crearDoctores", crearDoctores)
module.exports = router