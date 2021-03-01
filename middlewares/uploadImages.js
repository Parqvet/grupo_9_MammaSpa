//proceso de archivos subidos al servidor

const multer = require('multer');
const path =require('path');

const storage = multer.diskStorage({
    destination : (req, file, cb)=> {
        cb(null, 'public/images/users')//donde se guarda la img
    },
    filename : (req ,file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }   
})

module.exports = multer({storage});