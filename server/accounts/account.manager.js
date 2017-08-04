const database = require('../persistence/databases/account.database');
const security = require('./auth/security');
const crypto = require("crypto");
const Account = require('./account.model');
const emails = require('../emails/email.manager');
const jwt = require('jsonwebtoken');
const settings = require('../../settings/settings');

let Manager = {};

Manager.get = async (email) => {
    let info = await database.getAccountByEmail(email);
    return new Account(info.id, info.email, info.username, info.password, info.activated, info.level);
};

Manager.emailExists = async (email) => {
    return await database.emailExists(email);
};

Manager.usernameExists = async (username) => {
    return await database.usernameExists(username);
};

Manager.create = async (email, username, password) => {
    let securepassword = await security.hashPassword(password);
    let id = await database.createAccount(email, username, securepassword);
    return new Account(id, email, username, false, 0);
};

Manager.createActivationCode = async (account, hostAddress) => {
    let code = Manager.generateActivationCode(account.id);
    database.insertActivationCode(account.id, code);
    emails.sendActivationMail(account.email, account.username, code, hostAddress);
}

Manager.authenticate = async (email, password) => {
    let exists = await Manager.emailExists(email);
    if(exists) {
        let account = await Manager.get(email);
        let correct = await security.checkPassword(password, account.password);
        if(correct) return Manager.generateToken(account);
    }
    return false;
};

Manager.generateToken = async (account) => {
    return jwt.sign({ user: account.email }, settings.jwt.secret, {
        expiresInMinutes: 1440 // 24h
    });
};

Manager.generateActivationCode = (accountid) => {
    let code = crypto.randomBytes(10).toString('hex');
    return code + accountid;
};

Manager.activate = async (key) => {
    let accountid = parseInt(key.substring(20, key.length));
    if(typeof accountid !== 'number') return false;
    else return(await database.activateAccount(accountid, key));
};

module.exports = Manager;