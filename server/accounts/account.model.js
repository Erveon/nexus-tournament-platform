module.exports = class Account {

    constructor(id, email, username, activated, level) {
        this._id = id;
        this._email = email;
        this._username = username;
        this._activated = activated;
        this._level = level;
    }

    get id() { return this._id; }
    get email() { return this._email; }
    get username() { return this._username; }
    get activated() { return this._activated; }
    get level() { return this._level; }

}