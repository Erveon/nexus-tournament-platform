const express = require('express');
const router = express.Router();

const passport = require('passport');

router.use('/auth', require('./auth.api'));

router.get('/', (req, res) => {
    res.sendStatus(403);
});

router.post('/jwt', auth(), (req, res) => {
    res.json({success: true});
});

function auth() {
    return passport.authenticate('jwt', { session: false});
};

module.exports = router;