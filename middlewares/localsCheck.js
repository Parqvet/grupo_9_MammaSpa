module.exports = (req, res, next) => {
    // si el admin levantó sesion
    if(req.session.adminSession) {
        // vamos a crear una variable local, el cual estará disponible en toda la app
        res.locals.adminSession = req.session.adminSession;
    }

    // sesión del usuario
    if(req.session.userSession) {
        res.locals.userSession = req.session.userSession;
    }

    next();
}