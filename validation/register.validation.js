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

   /* check('password')
        .isLength({
            min: 6,
            max: 10           

        })
        .withMessage('La contraseña debe tener al menos 8 caracter'),
    
       

    body('password2').custom(( value, req) => {
        if(value !== req.body.pass){
            return false
        }else{
            return true
        }
    }). withMessage('Las contraseñas no coinciden'),

    body('email')
        .custom(value => {
            let result = users.find(user => user.email === value.trim());

            // para verificar si el usuario ya está registrado
            if(result) {
                return false;
            } else {
                return true;
            }
<<<<<<< HEAD
        }).withMessage('El usuario ya está registrado')*/
     
=======
        }).withMessage('El email ya está registrado')
>>>>>>> 1d9668b39ea43283dd7e215df1a3dcfc7caddf8d
]