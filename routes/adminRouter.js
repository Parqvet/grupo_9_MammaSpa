const { Router } = require('express');
const router = Router();

// middleware: multer para carga de imágenes de productos
const upload = require('../middlewares/multerProducts');

// middleware para protección de rutas del admin
const adminCheck = require('../middlewares/adminCheck');
        
// controlador del admin: metodos de los productos
const { 
    renderProductsList,
    createNewProduct,
    storeNewProduct,
    renderEditProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/adminController');

// controlador del admin: metodos de los servicios
const { 
    renderServicesList,
    renderServicesForm,
    createNewService,
    renderEditService,
    updateService,
    deleteService
} = require('../controllers/adminController');

// renderizar listado de productos
router.get('/products/list', adminCheck, renderProductsList);

// renderizar vista/formulario para agregar producto
router.get('/products/add', adminCheck, createNewProduct);
// procesar el agregado del nuevo producto
router.post('/products/new-product', adminCheck, upload.any(), storeNewProduct);

// renderizar vista para editar producto
router.get('/products/edit/:id', adminCheck, renderEditProduct);
// procesar la edición del producto
router.put('/products/update/:id', adminCheck, upload.any(), updateProduct);

// eliminar producto
router.delete('/products/delete/:id', adminCheck, deleteProduct);

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