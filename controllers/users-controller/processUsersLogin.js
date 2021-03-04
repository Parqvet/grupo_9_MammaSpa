const path = require('path');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

// users db
const { getUsers, setUsers } = require(path.join('../../', 'data', 'users'));
const users = getUsers();

// admins db
const { getAdmins } = require(path.join('../../', 'data', 'admins'));
const admins = getAdmins();

module.exports = {
    processUsersAdminLogin: (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.render('login-view', {
                errors: errors.mapped()
            })
<<<<<<< HEAD:controllers/usersController.js
        } else {
            const { firstname, lastname, email, password, } = req.body;

            let lastID = 0;
            users.forEach(user => {
                if(user.id > lastID) {
                    lastID = user.id;
                }
            });

            // hashear la pass
            let hashPass = bcrypt.hashSync(password.trim(), 12);

            const newUser = {
                id: +(lastID + 1),
<<<<<<< HEAD:controllers/users-controller/processUsersLogin.js
=======
<<<<<<< HEAD
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: hashPass,
               // avatar : req.files[0].fieldname
            };
=======
>>>>>>> dev:controllers/usersController.js
                firstname,
                lastname,
                email,
                password: hashPass
            }
<<<<<<< HEAD:controllers/users-controller/processUsersLogin.js
=======
>>>>>>> 1d9668b39ea43283dd7e215df1a3dcfc7caddf8d
>>>>>>> dev:controllers/usersController.js

            users.push(newUser);
            setUsers(users);

            res.redirect('login');
=======
>>>>>>> 4d0dd3acbdd3f64ee74c9e784d66cf4f63df3cac:controllers/users-controller/processUsersLogin.js
        }

<<<<<<< HEAD:controllers/users-controller/processUsersLogin.js
=======
    renderLogin: (req, res) => {
        res.render('login-view')
    },
    processLogin: (req, res) => {
<<<<<<< HEAD
        const { email, password } = req.body;
        let errors = validationResult(req);
//validacion si hay errores
        if (errors.isEmpty()) {
//si hay errores vuelvo a loguin con el mensaje de errors
        } else {
            return res.render('login', {errors: errors.errors});
        }
=======
>>>>>>> dev:controllers/usersController.js
        const { email, password, remember } = req.body;

        /* Inicio de sesión para el admin */
        /*  mail: admin@gmail.com
            pass: admin */

        // buscar si existe el admin
        let adminResult = admins.find(admin => admin.email === email.trim());

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

        /* Inicio de sesión para el usuario */
<<<<<<< HEAD:controllers/users-controller/processUsersLogin.js
=======
>>>>>>> 1d9668b39ea43283dd7e215df1a3dcfc7caddf8d
>>>>>>> dev:controllers/usersController.js

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
        }
<<<<<<< HEAD:controllers/users-controller/processUsersLogin.js
        
    }
}
=======
<<<<<<< HEAD
    },
    renderProfile: (req,res)=> {
        res.render('profileUser-view')
    }

}
=======
        
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

    renderProfile: (req, res) => {
        
    }
}
>>>>>>> 1d9668b39ea43283dd7e215df1a3dcfc7caddf8d
>>>>>>> dev:controllers/usersController.js
