const { sequelize } = require('../BD/baseDeDatos.js')
const { DataTypes } = require('sequelize');

const Doctores = sequelize.define("Doctores", {

id: {
type: DataTypes.INTEGER,
autoIncrement : true,
primaryKey: true
},
nombre: {
type: DataTypes.STRING,
allowNull : false
},
matricula :{
    type : DataTypes.STRING,
    allowNull : false
}
}, {tableName: "doctores", timestamps: true
})

module.exports = { Doctores }