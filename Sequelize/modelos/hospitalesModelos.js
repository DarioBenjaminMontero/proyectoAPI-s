const { sequelize } = require("../BD/baseDeDatos.js")
const { DataTypes } = require("sequelize"); 

const Hospitales = sequelize.define("Hospitales", {

id: {

type: DataTypes.INTEGER,
primaryKey : true,
autoIncrement: true

},
nombre: {

    type: DataTypes.STRING,
    allowNull : false
},
descripcion: {
type: DataTypes.STRING,
allowNull : false

},
direccion: {
type: DataTypes.STRING,
allowNull : false

},
isActive : {

type: DataTypes.BOOLEAN,
allowNull : false,
defaultValue : true

},
especialidad: {

type: DataTypes.STRING,
allowNull : false

}


},{
tableName : "hospitales",
timestamps : true

})

module.exports = { Hospitales }