const pg = require('pg');
const fs = require('fs');
const settings = require('../../settings/settings');

const Client = pg.Client;
const Pool = pg.Pool;

let Database = {};

pg.defaults.poolSize = 10;

this.pool = new Pool(settings.database);
this.pool.on('error', (err, client) => logger.error(`client error: ${err.message}`));

/****
 * Query the database
 * Examples: https://github.com/brianc/node-postgres/wiki/pg
 ****/
Database.query = (query, values) => {
    return this.pool
    .query(query, values)
    .catch(logger.error);
}

/****
 * Fetch a client from the pool for a transaction
 * Callback arguments: err, client, release
 * After using the client, release() it back into the pool.
 ****/
Database.getClient = (callback) => {
    return this.pool.connect(callback);
}

module.exports = Database;
