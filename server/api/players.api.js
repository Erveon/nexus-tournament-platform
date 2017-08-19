const express = require('express');
const router = express.Router();
const passport = require('passport');
const playersdb = require('../persistence/databases/players.database');

router.get('/list/:page/:amount', async (req, res) => {
    let page = req.params.page, amount = req.params.amount || 5;
    res.json(await playersdb.getPlayers(amount, page * amount));
});

module.exports = router;