const { Router } = require('express');
const router = Router();

const { renderCarrito } = require('../controllers/carritoController');

router.get('/', renderCarrito);

module.exports = router;