const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const settings = require('../../../settings/settings');
const accountdb = require('../../persistence/databases/account.database');

var opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
    secretOrKey: settings.jwt.secret
};

let strategy = new JwtStrategy(opts, async (payload, done) => {
    let email = payload.user;
    let account = await accountdb.getAccountByEmail(email);
    done(null, account);
});

module.exports = strategy;