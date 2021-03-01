const { check, validationResult, body } = require('express-validator');
const { getUsers } = require('../data/users');
const users = getUsers();

module.exports = [
    check('firstname')
        .notEmpty()
        .withMessage('El nombre de usuario es requerido'),

    check('lastname')
        .notEmpty()
        .withMessage('El apellido es requerido'),

    check('email')
        .isEmail()
        .withMessage('Debe ingresar un correo electrónico válido'),

    check('password')
        .notEmpty()
        .withMessage('La contraseña es requerida'),

    body('email')
        .custom(value => {
            let result = users.find(user => user.email === value.trim());

            // para verificar si el usuario ya está registrado
            if(result) {
                return false;
            } else {
                return true;
            }
        }).withMessage('El email ya está registrado')
]