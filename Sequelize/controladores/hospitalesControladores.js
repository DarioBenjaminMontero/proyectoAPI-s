const { Hospitales, Doctores } = require("../modelos/relacionDoctoresHospitales.js")

const encontrarHospitalesConDoctores = async(req,res) =>{
    consulta =  await Hospitales.findAll({ include: Doctores })
    res.status(200).json(consulta)
}


const encontrarHospitales = async(req, res) =>{
const consulta = await Hospitales.findAll()
res.status(200).json(consulta)
}
const encontrarHospitalesEspecialidad = async(req, res) =>{

const especialidad = req.body.especialidad//si no escribis .especialidad no se puede
//diferenciar y entonces te tira error (ACORDARSE GORDO) estabas mandando un objeto
//entero donde no se podia diferenciar

const consulta = await Hospitales.findAll({
    where: {

        especialidad : especialidad

    }
})
res.status(200).json(consulta)
}

const actualizarEspecialidad = async(req, res) =>{

const id = req.body.id
const especialidad = req.body.especialidad

const consulta = await Hospitales.update({especialidad : especialidad}, 
 {where: {
 id: id
 }} 
)
res.status(200).json(consulta)
}

const eliminarHospital = async(req, res) =>{
const id = req.params.id



const consulta = await Hospitales.destroy({
    where: {
        id : id
    }
})


if(consulta === 0){

res.status(400).json({message: "no encontrado"})
return
}

res.status(200).json({message: "hospital eliminado"})



}

const encontrarHospitalesActivos = async(req, res) =>{

const consulta =  await Hospitales.findAll(
    {
        where: {
            isActive: true
        }
    },
)
res.status(200).json(consulta)

    
}



module.exports = {encontrarHospitalesConDoctores, encontrarHospitalesActivos, encontrarHospitales, encontrarHospitalesEspecialidad, actualizarEspecialidad, eliminarHospital }
