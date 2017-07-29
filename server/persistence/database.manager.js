const pg = require('pg');
const fs = require('fs');
const settings = require('../../settings/settings');

const Client = pg.Client;
const Pool = pg.Pool;

let Database = {};
pg.defaults.poolSize = 10;

Database.init = () => {
    let pool = new Pool(settings.database);
    pool.on('error', (err, client) => logger.error(`client error: ${err.message}`));
    Database.pool = pool;
}

/****
 * Query the database
 * Examples: https://github.com/brianc/node-postgres/wiki/pg
 ****/
Database.query = (query, values) => {
    return Database.pool
    .query(query, values)
    .catch(console.error);
}

/****
 * Fetch a client from the pool for a transaction
 * Callback arguments: err, client, release
 * After using the client, release() it back into the pool.
 ****/
Database.getClient = (callback) => {
    return Database.pool.connect(callback);
}

module.exports = Database;
