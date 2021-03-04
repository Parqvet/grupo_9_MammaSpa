const { Router } = require('express');
const router = Router();

const { renderProductsMain, renderProduct, renderServisMain, renderServis } = require('../controllers/productsController');

// renderizar vista de productos
router.get('/', renderProductsMain);

// renderizar vista de detalle de producto
router.get('/detalle/:id', renderProduct);

//renceriza la vista de Servicios

router.get('/servicios', renderServisMain);


//renderiza la vista de detalle de servicio
router.get('/servDetalle/:id', renderServis);



module.exports = router;