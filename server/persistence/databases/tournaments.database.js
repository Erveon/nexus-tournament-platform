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

module.exports = Database;