const { sequelize } = require("../BD/baseDeDatos.js")
const { DataTypes } = require("sequelize");

const Doctores =  sequelize.define("Doctores", {
    id_doctor:
    {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    Nombre: 
    {
        type : DataTypes.STRING,
        allowNull: false
    },
    Matricula: 
    {
        type : DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    idHospital:
    {
        type : DataTypes.INTEGER,
        allowNull: false
    }
},{
    tableName: "doctores",
    timestamps: true
})

module.exports = { Doctores }