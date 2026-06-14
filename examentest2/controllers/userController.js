const { User, Hobby } = require('../models/index.js');

const getUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            include: Hobby // Trae los hobbies asociados
        });
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener usuario por ID
const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id, { include: Hobby });

        if (!user) {
            return res.status(404).json({ message: `Usuario con el id: ${id} no encontrado` });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Buscar usuarios por nombre
const getUsersByName = async (req, res) => {
    try {
        const nameUsers = await User.findAll({
            where: { nombre: req.params.name },
            include: Hobby
        });
        res.status(200).json(nameUsers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear usuario y opcionalmente asignarle hobbies existentes por ID
const createUser = async (req, res) => {
    try {
        const { nombre, apellido, edad, fecha_nacimiento, hobbiesIds } = req.body;

        if (!nombre || !apellido || !edad || !fecha_nacimiento) {
            return res.status(400).json({
                message: "Faltan datos obligatorios (nombre, apellido, edad o fecha_nacimiento)"
            });
        }

        const newUser = await User.create({ nombre, apellido, edad, fecha_nacimiento });

        // Si mandas un arreglo de IDs de hobbies ej: [1, 3], los vincula automáticamente
        if (hobbiesIds && hobbiesIds.length > 0) {
            await newUser.addHobbies(hobbiesIds);
        }

        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getUsers,
    getUserById,
    getUsersByName,
    createUser
};