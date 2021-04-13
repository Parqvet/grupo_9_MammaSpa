const{validationResult} = require('express-validator');
const db =require ('../../database/models');
const bcrypt = require('bcrypt');
const servicesController = require('./servicesController');
let sequelize = db.sequelize;


module.exports = {
    register : (req, res) => {
        res.render('register')
},
processRegister :(req,res) => {
    let errores = validationResult(req);

    if(errores.isEmpty()){
        const{firstname, email, password} = req.body;
        db.User.create({
            firstname : firstname.trim(),
            email,
            password : bcrypt.hashSync(password,12)
        })
        .then(() =>res.redirect('/users/login'))
        .catch(error =>res.send(error))

    }else{
        return res.render('register',{
            errores : errores.mapped(),
            old: req.body
        })
    }

},
    login :(req,res) => {
        res.render('login')

    },
    processLogin : (req, res) => {
        let errores = validationResult(req);
        if(errores.isEmpty()){
            const {email, password, recordar} = req.body;

            db.User.findOne({
                where : {
                    email
                }
            })
            .then(user => {
               // res.send(user)
                if(user && bcrypt.compareSync(password, user.password)){
                    req.session.userLogin = {
                        id :user.id,
                        name :user.name,
                        rol :user.rol,
                        avatar : user.avatar
                    }
                    if(recordar){
                        res.cookie('userComision4', req.session.userLogin,{
                            maxAge : 1000 * 60
                        })
                    }
                    return res.redirect('/')       
                }else {
                    return res.render('login',{
                        errors:{
                            invalid : {
                                msg : "Credenciales inválidas"
                            }
                        }
                    })
                }
            })
        }else{
            return res.render('login',{
                errores : errores.mapped(),
                old :req.body
            })
        }
    },

    logaut :(req,res) => {
        req.session.destroy();
        if(req.cookies.userComision4){
            res.cookie('userComision4','',{maxAge : -1})
        }
        return res.redirect('/')
    },
    profile :(req,res) => {
        res.render('profile')
    },
    processRegister :(req,res) => {

    }

}
