const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendStatus(403);
});

router.use('/auth', require('./auth.api'));
router.use('/account', require('./account.api'));
router.use('/news', require('./news.api'));
router.use('/players', require('./players.api'));

module.exports = router;