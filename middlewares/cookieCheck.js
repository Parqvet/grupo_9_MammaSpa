module.exports = (req, res, next) => {
    if(req.cookies.adminSession) {
        req.session.adminSession = req.cookies.adminSession;
    }

    if(req.cookies.userSession) {
        req.session.userSession = req.cookies.userSession;
    }

    next();
}