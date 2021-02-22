const { Router } = require('express');
const router = Router();

const { renderProductsList, renderProductForm, createNewProduct, renderEditProduct, updateProduct, deleteProduct, renderServicesList, renderServisForm, createNewServis, renderEditServis, updateServis, deleteServis } = require('../controllers/adminController');

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

// eliminar producto
router.delete('/products/delete/:id', deleteProduct);


 // SERVICIOS


//renderiza listado de servicios
router.get('/services/list', renderServicesList);

// renderizar vista para agregar servicio
router.get('/services/add', renderServisForm);
// procesar el agregado del nuevo servicio
router.post('/services/new-servis', createNewServis);

// renderizar vista para editar servicio
router.get('/services/edit/:id', renderEditServis);
// procesar la edición del servicio
router.put('/services/update/:id', updateServis);

// eliminar servicio
router.delete('/services/delete/:id', deleteServis);
 


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