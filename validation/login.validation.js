const { check } = require('express-validator');

module.exports = [
    check('email')
        .notEmpty()
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