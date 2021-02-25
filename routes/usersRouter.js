const { Router } = require('express');
const router = Router();
const multer = require('multer'); 
// requerir y demas MULTER
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/tmp/my-uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
   
  var upload = multer({ storage: storage })


const {renderRegister, renderLogin} = require('../controllers/usersController');

router.get('/login', renderLogin);

router.get('/register', renderRegister);

module.exports = router;