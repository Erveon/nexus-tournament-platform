const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendStatus(403);
});

router.use('/auth', require('./auth.api'));
router.use('/account', require('./account.api'));

module.exports = router;