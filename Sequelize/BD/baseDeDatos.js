const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("sistemaHospitales", "postgres", "1234", {

host: "localhost", 
dialect: "postgres",
logging: false

})
module.exports = { sequelize }