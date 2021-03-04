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
}