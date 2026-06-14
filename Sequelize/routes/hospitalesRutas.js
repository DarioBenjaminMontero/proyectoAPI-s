const { obtenerHospitales, crearHospital } = require("../controladores/hospitalesControladores")
const express = require("express")
const router = express.Router()

router.get("/", obtenerHospitales)
router.post("/crear", crearHospital)

module.exports = router;