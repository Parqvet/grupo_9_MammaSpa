const { Router } = require('express');
const router = Router();

const { renderProductsMain, renderProduct, renderServiciosMain, renderServicio } = require('../controllers/productosController');

// renderizar vista de productos
router.get('/', renderProductsMain);

// renderizar vista de detalle de producto
router.get('/detalle/:id', renderProduct); 



//renderizar vista de servicios
router.get('/servicios', renderServiciosMain);

router.get('/detalleServ/:id', renderServicio);

module.exports = router;