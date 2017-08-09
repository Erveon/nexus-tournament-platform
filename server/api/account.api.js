const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', auth(), async (req, res) => {
    res.json(req.user);
});

function auth() {
    return passport.authenticate('jwt', { session: false});
};

module.exports = router;