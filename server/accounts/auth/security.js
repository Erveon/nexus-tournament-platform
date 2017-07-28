const bcrypt = require('bcryptjs');

/****
* Security settings
****/
const settings = {
    saltRounds: 10
};

/****
* (Async)
* Arguments: plaintext password
* Returns a promise with the hashed password
****/
module.exports.hashPassword = (password) => {
    return bcrypt.hash(password, settings.saltRounds);
};

/****
* (Async)
* Arguments: Plaintext password, hashed password
* Returns a promise with the result
****/
module.exports.checkPassword = (password, securepassword) => {
    return bcrypt.compare(password, securepassword);
};
