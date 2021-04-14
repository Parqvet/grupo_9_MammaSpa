const { check, body } = require("express-validator")
const db = require('../database/models')

module.exports = [
    check('firstname')
    .notEmpty()
    .whithMessage('El nombre es requerido'),

    check('email')
    .isEmail()
    .withMessage('Debes escribir un email válido'),

    body('email').custom(value => {
        return db.Alias.findOne({
            where : {
                email : value
            }
        })
        .Then(user => {
            if (user){
            return Promise.reject('Este email ya esta registrado')
            }
        })
    }),
//aca rechaso la promesa por eso uso return en db.alias.findone y no hay cach
//verifica si el email esta registrado, sino existe es falso y no se muestra nada
    check('password')
    .isLength({
        min : 6,
        max : 12
    })
    .withMessage('La contraseña debe tener un min de 6 y un max de 12 caracteres'),
    body('pass2').custom((value,{req})=> value !== req.body.pass ? false : true)
    .withMessage('Las contraseñas no coinciden'),

    check('bases')
    .isString('on')
    .whithMessage('Debes aceptar las condiciones')
]
