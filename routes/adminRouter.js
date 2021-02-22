const { Router } = require('express');
const router = Router();

// multer para carga de imágenes de productos
const upload = require('../middlewares/multerProducts');

// metodos de los productos
const { renderProductsList, renderProductForm, createNewProduct, renderEditProduct, updateProduct, deleteProduct } = require('../controllers/adminController');

// metodos de los servicios
const { renderServicesList, renderServicesForm, createNewService, renderEditService, updateService, deleteService } = require('../controllers/adminController');

// renderizar listado de productos
router.get('/products/list', renderProductsList);

// renderizar vista para agregar producto
router.get('/products/add', renderProductForm);
// procesar el agregado del nuevo producto
router.post('/products/new-product', upload.any(), createNewProduct);

// renderizar vista para editar
router.get('/products/edit/:id', renderEditProduct);
// procesar la edición del producto
router.put('/products/update/:id', updateProduct);

// eliminar producto
router.delete('products/delete/:id', deleteProduct);

// rutas de los servicios

// renderiza listado de servicios
router.get('/services/list', renderServicesList);

// renderizar vista para agregar servicio
router.get('/services/add', renderServicesForm);
// procesar el agregado del nuevo servicio
router.post('/services/new-servis', createNewService);

// renderizar vista para editar servicio
router.get('/services/edit/:id', renderEditService);
// procesar la edición del servicio
router.put('/services/update/:id', updateService);

// eliminar servicio
router.delete('services/delete/:id', deleteService);

module.exports = router;