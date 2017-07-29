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
    return await database.exists('email', email);
};

Manager.create = async (email, username, password) => {
    let securepassword = security.hashPassword(password);
    let id = await database.createAccount(email, username, securepassword);
    if(id) {
        let code = Manager.generateActivationCode(id);
        await database.insertActivationCode(id, code);
        emails.sendActivationMail(email, username, code);
        return true;
    }
    return false;
};

Manager.authenticate = (email, password) => {

};

Manager.generateActivationCode = (accountid) => {
    let code = crypto.randomBytes(10).toString('hex');
    return code + accountid;
};

Manager.activate = async (key) => {
    let code = key.substring(0, 20);
    let accountid = key.substring(20, key.length);
    return(await database.activateAccount(accountid, code));
};

module.exports = Manager;