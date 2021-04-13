const { Router } = require('express');
const router = Router();

const { renderMockups } = require('../controllers/mockupsController.js');

router.get('/', renderMockups);

module.exports = router;