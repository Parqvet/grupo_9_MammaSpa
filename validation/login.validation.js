const { check, body } = require('express-validator');
const { getUsers } = require('../data/users');
const users = getUsers();

const { getAdmins } = require('../data/admins');
const admins = getAdmins();

module.exports = [
    check('email')
        .notEmpty()
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
