const database = require('../persistence/databases/account.database');
const security = require('./auth/security');
const crypto = require("crypto");
const Account = require('./account.model');
const emails = require('../emails/email.manager');

let Manager = {};

Manager.get = async (email) => {
    let info = await database.getAccount('email', email);
    return new Account(info.id, info.email, info.username, info.activated, info.level);
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

Manager.authenticate = (email, password) => {

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