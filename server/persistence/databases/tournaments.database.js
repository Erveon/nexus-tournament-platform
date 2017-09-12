const database = require('../database.manager');

let Database = {};

Database.createTournament = (name, data) => {
    return new Promise((resolve, reject) => {
        database.query(`INSERT INTO tournaments(name, data) VALUES($1, $2) RETURNING id`, 
            [name, data])
        .then(res => resolve(res.rows[0].id))
        .catch(reject);
    });
};

Database.editTournament = (id, name, data) => {
    return new Promise((resolve, reject) => {
        database.query(`UPDATE tournaments SET name = $2, data = $3 WHERE id = $1`, 
            [id, name, data])
        .then(resolve)
        .catch(reject);
    });
};

Database.getTournaments = () => {
    return new Promise((resolve, reject) => {
        database.query(`SELECT * FROM tournaments`, [])
        .then(res => resolve(res.rows))
        .catch(reject);
    });
};

Database.getTournaments = (amount, offset) => {
    return new Promise((resolve, reject) => {
        database.query(`SELECT * FROM tournaments
            ORDER BY id DESC
            LIMIT $1 OFFSET $2`, 
            [amount, offset])
        .then(res => {
            let tournaments = [];
            for(let i = 0; i < res.rows.length; i++) {
                let tournament = res.rows[i];
                tournaments.push(tournament);
            }
            resolve(tournaments);
        }).catch(reject);
    });
};

Database.getTournament = (id) => {
    return new Promise((resolve, reject) => {
        database.query(`SELECT * FROM tournaments
            WHERE tournaments.id = $1`, 
            [id])
        .then(res => {
            if(res.rows.length > 0) resolve(res.rows[0]);
            else resolve({});
        }).catch(reject);
    });
};

module.exports = Database;