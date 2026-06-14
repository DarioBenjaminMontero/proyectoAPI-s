const express = require("express");
const { sequelize } = require('./config/db.js');
require('./models/index.js'); 
const userRoutes = require('./routes/userRoutes.js');
const hobbyRoutes = require('./routes/hobbyRoutes.js');

const server = express();
server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({
        message: "El server funciona correctamente"
    });
});

server.use('/users', userRoutes);
server.use('/hobbies', hobbyRoutes);

server.listen(3000, async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ alter: true }); 
        console.log("Conexión exitosa a la Base de Datos");
        console.log("El servidor está ON en el puerto 3000");
    } catch (error) {
        console.error("Error al iniciar el servidor o DB:", error);
    }
});