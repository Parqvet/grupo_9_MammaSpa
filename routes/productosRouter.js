const { Router } = require('express');
const router = Router();

const {renderProduct}= require('../controllers/productosController');

router.get('/',renderProduct)



module.exports = router;