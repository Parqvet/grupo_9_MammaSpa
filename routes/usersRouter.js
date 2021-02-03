const { Router } = require('express');
const router = Router();

router.get('/users', (req,res) => {
    res.send('Users page');
});

module.exports = router;