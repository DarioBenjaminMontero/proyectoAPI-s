const { Router } = require('express');
const { getUsers, getUserById, getUsersByName, createUser } = require('../controllers/userController');

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.get('/nombre/:name', getUsersByName);
router.post('/', createUser);

module.exports = router;