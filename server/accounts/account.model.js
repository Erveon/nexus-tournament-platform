module.exports = class Account {

    constructor(id, email, username, password, activated, level) {
        this._id = id;
        this._email = email;
        this._username = username;
        this._password = password;
        this._activated = activated;
        this._level = level;
    }

    get id() { return this._id; }
    get email() { return this._email; }
    get username() { return this._username; }
    get password() { return this._password; }
    get activated() { return this._activated; }
    get level() { return this._level; }

}