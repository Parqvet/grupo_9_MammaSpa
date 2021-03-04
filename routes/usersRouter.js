const { Router } = require('express');
const router = Router();

// middleware de validación para registro de usuarios
const registerValidation = require('../validation/register.validation');

// middleware de validación para login de usuarios
const loginValidation = require('../validation/login.validation');

const { renderRegister, renderLogin, processLogout } = require('../controllers/users-controller/usersController');

// controlador para registro de users
const { processRegister } = require('../controllers/users-controller/processUsersRegister');

// controlador para login de users y admin
const { processUsersAdminLogin } = require('../controllers/users-controller/processUsersLogin');

// renderizar y procesar login
router.get('/login', renderLogin);
router.post('/login', loginValidation, processUsersAdminLogin);

// renderizar y procesar register
router.get('/register', renderRegister);
router.post('/register', registerValidation, processRegister);

// cerrar sesión
router.get('/logout', processLogout);

module.exports = router;