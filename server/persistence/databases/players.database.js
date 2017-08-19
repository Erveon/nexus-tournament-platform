const database = require('../database.manager');

let Database = {};

Database.getPlayers = (amount, offset) => {
    return new Promise((resolve, reject) => {
        database.query(`SELECT username FROM accounts
            LIMIT $1 OFFSET $2`, 
            [amount, offset])
        .then(res => {
            let players = [];
            for(let i = 0; i < res.rows.length; i++) {
                let player = res.rows[i];
                players.push(player);
            }
            resolve(players);
        }).catch(reject);
    });
};

module.exports = Database;