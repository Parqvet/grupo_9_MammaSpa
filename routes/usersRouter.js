const { Router } = require('express');
const router = Router();

// middleware de validación para registro de usuarios
const registerValidation = require('../validation/register.validation');

// middleware de validación para login de usuarios


const { 
    renderRegister,
    processRegister,
    renderLogin,
    processLogin,
    processLogout,
    profile
} = require('../controllers/usersControllers');

// renderizar y procesar login
router.get('/login', renderLogin);
router.post('/login', processLogin);

// renderizar y procesar register
router.get('/register', renderRegister);
router.post('/register', registerValidation, processRegister);

router.get('/profile', profile);
//uploadImages debe coincidir con el nombre del middleware

// cerrar sesión
router.get('/logout', processLogout);

module.exports = router;
