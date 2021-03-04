const { Router } = require('express');
const router = Router();

const { renderServicesMain, renderService } = require('../controllers/servicesController');

router.get('/', renderServicesMain);

router.get('/detalle/:id', renderService);

module.exports = router;