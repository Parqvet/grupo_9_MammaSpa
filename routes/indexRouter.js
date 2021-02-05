const { Router } = require('express');
const router = Router();

const { renderHome } = require('../controllers/indexController');

router.get('/', renderHome);

module.exports = router;