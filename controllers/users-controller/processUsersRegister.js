const path = require('path');
const bcrypt = require('bcrypt');

const { validationResult } = require('express-validator');

// users db
const { getUsers, setUsers } = require(path.join('../../', 'data', 'users'));
const users = getUsers();

module.exports = {
    processRegister: (req, res) => {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            return res.render('register-view', {
                errors: errors.mapped()
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
                firstname,
                lastname,
                email,
                password: hashPass
            }

            users.push(newUser);
            setUsers(users);

            res.redirect('login');
        }
    }
}