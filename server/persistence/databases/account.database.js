const database = require('../database.manager');

let Database = {};

Database.getAccountByEmail = (email) => {
    return new Promise((resolve, reject) => {
        database.query("SELECT * FROM accounts WHERE email = $1", [email])
        .then(res => {
            if(res.rows.length === 1) {
                let account = res.rows[0];
                resolve(account);
            } else {
                resolve(false);
            }
        }).catch(reject);
    });
};

Database.getAccountByUsername = (username) => {
    return new Promise((resolve, reject) => {
        database.query("SELECT * FROM accounts WHERE username = $1", [username])
        .then(res => {
            if(res.rows.length === 1) {
                let account = res.rows[0];
                resolve(account);
            } else {
                resolve(false);
            }
        }).catch(reject);
    });
};

Database.createAccount = (email, username, securepassword) => {
    return new Promise((resolve, reject) => {
        database.query(`INSERT INTO accounts(email, username, password, creation, level, activated) 
            VALUES ($1, $2, $3, current_timestamp, $4, $5) RETURNING id`, 
            [email, username, securepassword, 0, false])
        .then(res => {
            resolve(res.rows[0].id);
        }).catch(reject);
    });
};

Database.getActivationCode = (accountid) => {
    return new Promise((resolve, reject) => {
        database.query(`SELECT code FROM activation_codes WHERE accountid = $1`, [accountid])
        .then(res => {
            if(res.rows.length !== 1) {
                reject("User does not have an activation code: " + accountid);
            } else {
                resolve(res.rows[0].code);
            }
        });
    });
};

Database.insertActivationCode = (accountid, code) => {
    return new Promise((resolve, reject) => {
        database.query(`INSERT INTO activation_codes(accountid, code) VALUES ($1, $2)`, [accountid, code])
        .then(res => {
            resolve();
        }).catch(reject);
    });
};

function checkActivationCode(accountid, code) {
    return new Promise((resolve, reject) => {
        database.query(`SELECT code FROM activation_codes WHERE accountid = $1`, [accountid])
        .then(res => {
            if(res.rows.length !== 1) {
                resolve(false);
            } else {
                let realcode = res.rows[0].code;
                resolve(realcode === code);
            }
        }).catch(() => resolve(false));
    });
}

function setActivated(accountid) {
    return new Promise((resolve, reject) => {
        database.query(`UPDATE accounts SET activated = $1 WHERE id = $2`, [true, accountid])
        .then(res => {
            resolve();
        }).catch(reject);
    });
}

function removeActivationCode(accountid) {
    database.query(`DELETE FROM activation_codes WHERE accountid = $1`, [accountid]);
}

Database.activateAccount = (accountid, code) => {
    return new Promise((resolve, reject) => {
        checkActivationCode(accountid, code)
        .then(correct => {
            if(correct) {
                removeActivationCode(accountid);
                setActivated(accountid)
                .then(() => resolve(true));
            } else {
                resolve(false);
            }
        }).catch(reject);
    });
};

Database.emailExists = (value) => {
    return new Promise((resolve, reject) => {
        database.query(`SELECT * FROM accounts WHERE email = $1`, [value])
        .then(res => {
            resolve(res.rows.length !== 0);
        });
    });
};

Database.usernameExists = (value) => {
    return new Promise((resolve, reject) => {
        database.query(`SELECT * FROM accounts WHERE username = $1`, [value])
        .then(res => {
            resolve(res.rows.length !== 0);
        });
    });
};

module.exports = Database;