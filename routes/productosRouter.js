const { Router } = require('express');
const router = Router();

const {renderProduct, indexProductos}= require('../controllers/productosController');


router.get('/',indexProductos);
router.get('/detalle',renderProduct);



module.exports = router;