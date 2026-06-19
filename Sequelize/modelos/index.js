const { Hospitales } = require('../modelos/hospitalesModelos.js')
const { Doctores } = require('../modelos/doctoresModelos.js')

Doctores.belongsTo(Hospitales, {foreignKey: "hospitalId"})
Hospitales.hasMany(Doctores, {foreignKey: "hospitalId"})

module.exports = { Doctores, Hospitales }