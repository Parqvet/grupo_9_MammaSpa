const { Router } = require('express');
const router = Router();

// requerir validaciones
const registerValidation = require('../validation/register.validation');

const {renderRegister, processRegister, renderLogin} = require('../controllers/usersController');

// renderizar y procesar login
router.get('/login', renderLogin);

// renderizar y procesar register
router.get('/register', renderRegister);
router.post('/register', registerValidation, processRegister);

module.exports = router;