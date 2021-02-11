const { render } = require('ejs');
const { Router } = require('express');
const router = Router();

// requerir controlador registro
const {renderRegister, renderLogin} = require('../controllers/usersController');

//enrutador de login
router.get('/login', renderLogin);



//enrutador de registro
router.get('/register', renderRegister);

module.exports = router;