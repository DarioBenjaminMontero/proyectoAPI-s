const { Hobby, User } = require('../models/index.js');

const getHobbies = async (req, res) => {
    try {
        const hobbies = await Hobby.findAll({ include: User });
        res.status(200).json(hobbies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createHobby = async (req, res) => {
    try {
        const { nombre } = req.body;
        if (!nombre) return res.status(400).json({ message: "El nombre es obligatorio" });

        const newHobby = await Hobby.create({ nombre });
        res.status(201).json(newHobby);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//{id: 1
//nombreHobbie: futbol
//usuariosincluidos : [benja, santi, emiliano]},
//id: 2,
//nombrehobbie
//usuariosincluidos: [agustin, thiago]
module.exports = {
    getHobbies,
    createHobby
};