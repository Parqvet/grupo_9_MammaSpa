const { Router } = require('express');
const router = Router();

// requerir middleware de validación para registro de usuarios
const registerValidation = require('../validation/register.validation');
// requerir middleware de validación para login de usuarios
const loginValidation = require('../validation/login.validation');

const { renderRegister, processRegister, renderLogin, processLogin } = require('../controllers/usersController');

// renderizar y procesar login
router.get('/login', renderLogin);
router.post('/login', loginValidation, processLogin);

// renderizar y procesar register
router.get('/register', renderRegister);
router.post('/register', registerValidation, processRegister);

module.exports = router;
