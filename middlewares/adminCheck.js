module.exports = (req, res, next) => {
    // si el admin ha levantado sesión, por ende si se ha logueado
    if(req.session.adminSession) {
        // que siga adelante
        next();
    } else {
        res.redirect('/users/login');
    }

}