const express = require('express');
const router = express.Router();

const passport = require('passport');
const jwt = require('jsonwebtoken');

const token = jwt.sign({ nexus: 'gaming' }, 'rgeeDh1jH8re9Dgrr');

router.get('/', (req, res) => {
    res.json({success: true, token: token});
});

router.post('/jwt', auth(), (req, res) => {
    res.json({success: true});
});

function auth() {
    return passport.authenticate('jwt', { session: false});
};

module.exports = router;