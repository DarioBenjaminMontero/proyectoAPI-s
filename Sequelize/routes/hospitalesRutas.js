const { obtenerHospitales, crearHospital, buscarPorEspecialidad, eliminarHospital, hospitalesActivos, hospitalesYDoctores } = require("../controladores/hospitalesControladores")
const express = require("express")
const router = express.Router()

router.get("/", obtenerHospitales)
router.post("/crear", crearHospital)
router.get("/buscarEspecialidad", buscarPorEspecialidad)
router.get("/eliminarHospital/:id", eliminarHospital)
router.get("/activos", hospitalesActivos)
router.get("/doctores", hospitalesYDoctores)
module.exports = router;