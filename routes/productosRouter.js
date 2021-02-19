const { Router } = require('express');
const router = Router();

const {renderProduct, indexProductos}= require('../controllers/productosController');

router.get('/detalle',renderProduct);
router.get('/',indexProductos);


module.exports = router;