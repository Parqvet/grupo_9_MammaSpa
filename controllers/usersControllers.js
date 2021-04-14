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

        
   

        // buscar si existe el admin
        /* let adminResult = admins.find(admin => admin.email === email.trim());

        if(adminResult) {
            if(bcrypt.compareSync(password, adminResult.password)) {
                
                // levantamos sesión
                req.session.adminSession = {
                    id: adminResult.id,
                    name: adminResult.firstname,
                    email: adminResult.email
                }

                // creamos cookie
                if(remember != 'undefined') {
                    res.cookie('adminSession', req.session.adminSession, {
                        maxAge: 1000 * 60
                    })
                }

                res.redirect('/admin/products/list');
            } else {
                res.render('login-view');
            }
        }

        

        // buscar si existe el usuario
        let result = users.find(user => user.email === email.trim());

        // si el usuario está registrado
        if(result) {
            // se comparan contraseñas
            if(bcrypt.compareSync(password, result.password)) {

                // una vez que se confirma autorización, almacenamos datos del usuario en session
                req.session.userSession = {
                    id: result.id,
                    name: result.firstname,
                    email: result.email
                }

                if(remember != 'undefined') {
                    res.cookie('userSession', req.session.userSession, {
                        maxAge: 1000 * 60
                    })
                }

                return res.redirect('/');
            } else {
                res.render('login-view', {
                    error: 'Credenciales inválidas'
                });
            }

        } else {
            return res.render('login-view', {
                error: 'Credenciales inválidas'
            })
        } */
        
    },

    processLogout: (req, res) => {
        /* req.session.destroy();

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

        res.redirect('/'); */
    },
    profile :(req,res) => {
        res.render('profileUser-view')
    }
}
