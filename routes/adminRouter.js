const { Router } = require('express');
const router = Router();

const { renderProductsList, renderProductForm, createNewProduct, renderEditProduct, updateProduct } = require('../controllers/adminController');

// renderizar listado de productos
router.get('/products/list', renderProductsList);

// renderizar vista para agregar producto
router.get('/products/add', renderProductForm);
// procesar el agregado del nuevo producto
router.post('/products/new-product', createNewProduct);

// renderizar vista para editar
router.get('/products/edit/:id', renderEditProduct);
// procesar la edición del producto
router.put('/products/update/:id', updateProduct);

/* const multer = require('multer'); 
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
   
  var upload = multer({ storage: storage }) */





/* router.get('/registroProd',adminController.renderAbm);

router.post('/registroProd', upload.any(), adminController.crearProd); */


module.exports = router