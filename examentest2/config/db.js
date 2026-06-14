const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('examentest', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false 
});

module.exports = { sequelize };