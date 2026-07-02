const { Hospitales } = require("./hospitalesModelos.js")
const { Doctores } = require("./doctoresModelos.js")

Hospitales.hasMany(Doctores, { foreignKey: "idHospital" })
Doctores.belongsTo(Hospitales, { foreignKey: "idHospital"})

module.exports = { Hospitales, Doctores }