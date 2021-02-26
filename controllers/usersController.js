const path = require('path');
const bcrypt = require('bcrypt');

const { validationResult } = require('express-validator');

const { getUsers, setUsers } = require(path.join('..', 'data', 'users'));
const users = getUsers();

module.exports = { 
    renderRegister: (req, res) => {
        res.render('register-view')
    },
    processRegister: (req, res) => {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            return res.render('register-view', {
                errors: errors.errors
            })
        } else {
            const { firstname, lastname, email, password } = req.body;

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
                firstname: firstname,
                lastname: lastname,
                email: email,
                pass: hashPass
            }

            users.push(newUser);
            setUsers(users);

            res.redirect('login');
        }
    },

    renderLogin: (req, res) => {
        res.render('login-view')
    },
    processLogin: (req, res) => {
        const { email, password } = req.body;

        let result = users.find(user => user.email === email);

        
    }

}