const bcrypt = require('bcrypt');

const db = require('../database/models');
const { validationResult } = require('express-validator');

module.exports = { 
    renderRegister: (req, res) => {
        res.render('register-view')
    },

    processRegister: (req, res) => {

        let errors = validationResult(req);

        if(errors.isEmpty()) {
            const  { firstname, lastname, email, password, password2 } = req.body;

            db.Users.create({
                firstname,
                lastname,
                email,
                password: bcrypt.hashSync(password, 12),
                password2: bcrypt.hashSync(password2, 12)
            })
            .then(() => res.redirect('login'))
            .catch(error => res.send(error))
        } else {
            return res.render('register-view', {
                errors: errors.mapped()
            })
        }
    },

    renderLogin: (req, res) => {
        res.render('login-view')
    },
    
    processLogin: (req, res) => {
        
    },

    processLogout: (req, res) => {
        req.session.destroy();

        if(req.cookies.adminSession) {
            res.cookie('adminSession', '', {
                maxAge: -1
            })
        }

        if(req.cookies.userSession) {
            res.cookie('userSession', '', {
                maxAge: -1
            })
        }

        res.redirect('/');
    },
}