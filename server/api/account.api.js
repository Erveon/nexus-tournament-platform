const express = require('express');
const router = express.Router();
const passport = require('passport');
const accountdb = require('../persistence/databases/account.database');

router.get('/', auth(), async (req, res) => {
    let account = req.user;
    res.json({
        username: account.username,
        email: account.email,
        level: account.level
    });
});

router.get('/:username', async (req, res) => {
    let who = req.params.username;
    let user = await accountdb.getAccountByUsername(who);
    if(!user) {
        res.sendStatus(404);
    } else {
        res.json({
            username: user.username
        });
    }
});

function auth() {
    return passport.authenticate('jwt', { session: false});
};

module.exports = router;