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
        const errors = validationResult(req);

        if (errors.isEmpty()) {
            const { email, password, remember } = req.body;
            
            console.log(email);
            db.Users.findOne({
                where: {
                    email: email
                }
            })
            .then( user => {
                if(user && bcrypt.compareSync(password, user.password)) {
                    console.log(user);
                    req.session.userLogin = {
                        id: user.id,
                        name: user.firstname,
                        role: user.role,
                        avatar: user.avatar,
                    }

                    if(remember) {
                        res.cookie('userMmSpa', req.session.userLogin, {
                            maxAge: 1000 * 60
                        })
                    }

                    return res.redirect('/');
                } else {
                    return res.render('login-view', {
                        error: 'Credenciales inválidas'
                    })
                }
            })
        }
    },

    processLogout: (req, res) => {
        req.session.destroy();
        if(req.cookies.userLogin) {
            res.cookie('userComision4', '' , { maxAge : -1 })
        }
        return res.redirect('/')
    },
    profile :(req,res) => {
        res.render('profileUser-view')
    }
}
