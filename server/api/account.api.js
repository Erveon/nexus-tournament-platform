const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', auth(), async (req, res) => {
    let account = req.user;
    console.log(account);
    res.json({
        username: account.username,
        email: account.email,
        level: account.level
    });
});

router.get('/:username', async (req, res) => {
    let who = req.params.username;
    res.json({
        username: who
    });
});

function auth() {
    return passport.authenticate('jwt', { session: false});
};

module.exports = router;