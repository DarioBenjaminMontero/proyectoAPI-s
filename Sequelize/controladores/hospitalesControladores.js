const { Hospitales } = require("../modelos/hospitalesModelos.js")

const obtenerHospitales = async(req, res) =>{

    const consulta = await Hospitales.findAll()
res.status(200).json(consulta);
}

const crearHospital = async(req, res) =>{

const {nombre, descripcion, direccion, isActive, especialidad} = req.body
    if(!nombre|| !descripcion||!direccion||isActive === undefined||!especialidad){
    res.status(400).json({message: "faltan datos obligatorios"})
    return
    }
const consulta = await Hospitales.create({
nombre: nombre,
descripcion: descripcion,
direccion: direccion,
isActive: isActive,
especialidad: especialidad
})

res.status(201).json({message: "hospital cargado de forma exitosa"})
}

module.exports = { obtenerHospitales, crearHospital }