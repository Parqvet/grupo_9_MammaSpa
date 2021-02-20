const { Router } = require('express');
const router = Router();

const multer = require('multer'); 
const adminController = require('../controllers/adminController');
const { renderAbm } = require('../controllers/adminController');
// requerir y demas MULTER
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'tmp/my-uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
   
  var upload = multer({ storage: storage })





router.get('/registroProd',adminController.renderAbm);

router.post('/registroProd', upload.any(), adminController.crearProd);


module.exports = router