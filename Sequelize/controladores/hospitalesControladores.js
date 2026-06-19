const { Hospitales, Doctores } = require("../modelos/index.js")

const obtenerHospitales = async(req, res) =>{
    const consulta = await Hospitales.findAll()
res.status(200).json(consulta);
}

const hospitalesYDoctores = async (req,res) =>{
const consulta = await Hospitales.findAll({include: Doctores})
res.status(200).json(consulta)
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


const buscarPorEspecialidad = async (req, res) =>{
let especialidad = req.body.especialidad
if(!especialidad){
    res.status(400).json({message: "faltan datos importantes"})
    return
}
    const consulta = await Hospitales.findAll({
    where: {
especialidad : especialidad
    }
})
if(consulta.length>0){
res.status(200).json(consulta)

}
else{
res.stauts(404).json({message: "no se encontro un hospital con esa especialidad"})
}


}


const eliminarHospital = async (req, res) =>{
const id = req.params.id
const resultado = await Hospitales.destroy({
where: {
id : id
}
})
if(resultado > 0){
res.status(200).json("registro eliminado")
}
else {
    res.status(404).json("no se encontró un registro asi")
}
}

const hospitalesActivos = async(req, res) =>{
const resultado = await Hospitales.findAll({
where: {
    isActive : true
}
})
if(resultado.length>0){

res.status(200).json(resultado)
}
else{
res.status(404).json({message: "no se encontraron hospitales activos"})
}


}




module.exports = { obtenerHospitales, crearHospital, buscarPorEspecialidad, eliminarHospital, hospitalesActivos, hospitalesYDoctores}