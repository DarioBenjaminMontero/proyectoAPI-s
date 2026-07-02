const { encontrarHospitales, encontrarHospitalesEspecialidad, actualizarEspecialidad, eliminarHospital, encontrarHospitalesActivos, encontrarHospitalesConDoctores } = require("../controladores/hospitalesControladores.js")

const express = require("express")
const router = express.Router()
router.get("/encontrarHospitalesConDoctores", encontrarHospitalesConDoctores)
router.get("/encontrarHospitales", encontrarHospitales)
router.get("/encontrarHospitalesEspecialidad", encontrarHospitalesEspecialidad)
router.patch("/actualizarHospitales", actualizarEspecialidad)
router.delete("/eliminarHospital/:id", eliminarHospital)
router.get("/encontrarHospitalesActivos", encontrarHospitalesActivos)

module.exports = router