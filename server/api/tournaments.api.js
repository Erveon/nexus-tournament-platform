const express = require('express');
const router = express.Router();
const passport = require('passport');
const tournamentsdb = require('../persistence/databases/tournaments.database');

router.post('/', auth(), async (req, res) => {
    let user = req.user;
    if(!user) {
        res.sendStatus(401);
    } else if(user.level < 6) {
        res.sendStatus(403);
    } else {
        let name = req.body.name, data = req.body.data;
        let id = await tournamentsdb.createTournament(name, data)
        res.json({id: id});
    }
});

router.get('/', async (req, res) => {
    let tournaments = await tournamentsdb.getTournaments();
    res.json(tournaments);
});

router.get('/list/:page/:amount', async (req, res) => {
    let page = req.params.page, amount = req.params.amount || 5;
    res.json(await tournamentsdb.getTournaments(amount, page * amount));
});

function auth() {
    return passport.authenticate('jwt', { session: false});
};

module.exports = router;