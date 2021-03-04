const { Router } = require('express');
const router = Router();

// requerir middleware de validación para registro de usuarios
const registerValidation = require('../validation/register.validation');

// requerir middleware de validación para login de usuarios
const loginValidation = require('../validation/login.validation');

<<<<<<< HEAD
//requerir middleware de descarga archivos
const uploadImages = require ('../middlewares/uploadImages');


const { renderRegister, processRegister, renderLogin, processLogin } = require('../controllers/usersController');
const { check } = require('express-validator');
=======
const { renderRegister, processRegister, renderLogin, processLogin, processLogout } = require('../controllers/usersController');
>>>>>>> 1d9668b39ea43283dd7e215df1a3dcfc7caddf8d

// renderizar y procesar login
router.get('/login', renderLogin);
router.post('/login', loginValidation, processLogin);


// renderizar y procesar register
router.get('/register', renderRegister);
router.post('/register', uploadImages.any(), registerValidation, processRegister);



router.get('/register/profile',)
//uploadImages debe coincidir con el nombre del middleware

<<<<<<< HEAD
module.exports = router;
=======
// cerrar sesión
router.get('/logout', processLogout);

module.exports = router;
>>>>>>> 1d9668b39ea43283dd7e215df1a3dcfc7caddf8d
