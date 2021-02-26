const { Router } = require('express');
const router = Router();

const { renderServicesMain, renderService } = require('../controllers/servicesController');

router.get('/', renderServicesMain);

router.get('/service', renderService);

module.exports = router;