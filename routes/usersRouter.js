const { render } = require('ejs');
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

// requerir controlador registro
const {renderRegister, renderLogin} = require('../controllers/usersController');

//enrutador de login
router.get('/login', renderLogin);

//enrutador de registro
router.get('/register', renderRegister);

module.exports = router;


/*app.use('/users/register', usersRouter);
app.use('/users/login', usersRouter);*/