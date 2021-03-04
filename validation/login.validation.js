const { check, body } = require('express-validator');
const { getUsers } = require('../data/users');
const users = getUsers();

const { getAdmins } = require('../data/admins');
const admins = getAdmins();

module.exports = [
    check('email')
        .notEmpty()
<<<<<<< HEAD
        .withMessage('Este campo es requerido'),
    check('email')    
        .isEmail()
        .withMessage('credenciales inválidas'),



    check('password')
        .notEmpty()
        .withMessage('Este campo es requerido'),
    check('password')
        .isLength({min: 8})
        .withMessage('La contraseña debe tener al menos 8 caracteres ')    
        
]

/*[ otras validaciones?
    check('email').isEmail().withMessage('credenciales inválidas'),
    check('password').isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres ')

]*/
=======
        .withMessage('El email es requerido'),

    body('email')
        .custom(value => {
        let userResult = users.find(user => user.email === value);
        let adminResult = admins.find(user => user.email === value);

        // para verificar si el usuario o el admin estan registrados
        if(userResult || adminResult) {
            return true;
        } else {
            return false;
        }
    }).withMessage('El email no está registrado'),

    check('password')
        .notEmpty()
        .withMessage('La contraseña es requerida')
]
>>>>>>> 4d0dd3acbdd3f64ee74c9e784d66cf4f63df3cac
