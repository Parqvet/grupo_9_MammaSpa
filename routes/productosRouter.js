const { Router } = require('express');
const router = Router();

const { renderProductsMain, renderProduct } = require('../controllers/productsController');

// renderizar vista de productos
router.get('/', renderProductsMain);

// renderizar vista de detalle de producto
router.get('/detalle/:id', renderProduct);

module.exports = router;