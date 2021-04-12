module.exports = (req, res, next) => {
    
    if(req.session.userLogin) {
        if(req.session.userLogin.role == 'admin') {
            next()
        }
    } else {
        res.redirect('/users/login');
    }

}