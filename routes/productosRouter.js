const { Router } = require('express');
const router = Router();

router.get('/productos', (req,res) => {
    res.send('Products page');
});

module.exports = router;