const path = require('path');
const bcrypt = require('bcrypt');

// users db
const { getUsers, setUsers } = require(path.join('../../', 'data', 'users'));
const users = getUsers();

// admins db
const { getAdmins } = require(path.join('../../', 'data', 'admins'));
const admins = getAdmins();

module.exports = {
    processUsersAdminLogin: (req, res) => {
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
        
    }
}