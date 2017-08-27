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
        console.log(req.body);
        /*let name = req.body.name, data = req.body.data;
        let id = await tournamentsdb.createTournament(name, data)
        .then(() => res.json({id: id}));*/
        res.sendStatus(200);
    }
});

function auth() {
    return passport.authenticate('jwt', { session: false});
};

module.exports = router;