const { check } = require('express-validator');

module.exports = [
    check('email')
        .notEmpty()
        .withMessage('Este campo es requerido'),

    check('password')
        .notEmpty()
        .withMessage('Este campo es requerido')
]