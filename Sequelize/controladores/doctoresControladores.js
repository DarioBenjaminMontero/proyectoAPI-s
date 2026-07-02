const { Hospitales, Doctores } = require("../modelos/relacionDoctoresHospitales.js")

const crearDoctores = async(req, res) =>{
    const consulta = Doctores.create({
        Matricula: "chpmi",
        Nombre: "Yo",
        idHospital: 2
    })
    if(consulta === 0){
        res.status(400).json({error: "faltan datos"})
    }
    else{
            res.status(201).json({message: "Creaste un doctor"})
        }
}
module.exports =  {crearDoctores}