const { check, body } = require('express-validator');
const db = require('../database/models')

module.exports = [
    check('email')
        .notEmpty()
        .withMessage('El email es requerido'),
    check('email')
        .isEmail()
        .withMessage('Debes escribir un email válido'),

    /* body('email')
        .custom(value => {
        let userResult = users.find(user => user.email === value);
        let adminResult = admins.find(user => user.email === value);

        // para verificar si el usuario o el admin estan registrados
        if(userResult || adminResult) {
            return true;
        } else {
            return false;
        }
    }).withMessage('El email no está registrado'), */

    check('password')
        .notEmpty()
        .withMessage('La contraseña es requerida')
]
