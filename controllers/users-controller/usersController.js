const path = require('path');
const bcrypt = require('bcrypt');

// users db
const { getUsers, setUsers } = require(path.join('../../', 'data', 'users'));
const users = getUsers();

// admins db
const { getAdmins } = require(path.join('../../', 'data', 'admins'));
const admins = getAdmins();

module.exports = { 
    renderRegister: (req, res) => {
        res.render('register-view')
    },

    renderLogin: (req, res) => {
        res.render('login-view')
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