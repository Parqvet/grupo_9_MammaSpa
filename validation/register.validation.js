const { check, validationResult, body } = require('express-validator');
const db = require('../database/models');

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
    .isLength({
        min: 6,
        max: 12
    })
    .withMessage('La contraseña debe tener entre 6 y 12 caracteres'),

    body('email')
        .custom(value => {
            return db.Users.findOne({
                were: {
                    email: value
                }
            })
            .then(user => {
                if(user) {
                    return Promise.reject('Este email ya está registrado');
                }
            })
            /* let result = users.find(user => user.email === value.trim());

            // para verificar si el usuario ya está registrado
            if(result) {
                return false;
            } else {
                return true;
            } */
        }).withMessage('El email ya está registrado'),

    body('password2')
        .custom( (value, {req}) => {
        if(value != req.body.password) {
            return false;
        } else {
            return true;
        }
    }).withMessage('Las contraseñas no coinciden')
]
