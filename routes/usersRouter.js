const { Router } = require('express');
const router = Router();

// requerir middleware de validación para registro de usuarios
const registerValidation = require('../validation/register.validation');

// requerir middleware de validación para login de usuarios
const loginValidation = require('../validation/login.validation');

//requerir middleware de descarga archivos
const uploadImages = require ('../middlewares/uploadImages');


const { renderRegister, processRegister, renderLogin, processLogin } = require('../controllers/usersController');
const { check } = require('express-validator');

// renderizar y procesar login
router.get('/login', renderLogin);
router.post('/login', loginValidation, processLogin);


// renderizar y procesar register
router.get('/register', renderRegister);
router.post('/register', uploadImages.any(), registerValidation, processRegister);



router.get('/register/profile',)
//uploadImages debe coincidir con el nombre del middleware

module.exports = router;
