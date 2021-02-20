const { Router } = require('express');
const router = Router();

const { renderProductsList, renderProductForm } = require('../controllers/adminController');

// renderizar listado de productos
router.get('/products', renderProductsList);

// renderizar vista de abm para agregar producto
router.get('/products/add', renderProductForm);
// procesar el agregado del nuevo producto
router.post('/products/new-product');

module.exports = router;