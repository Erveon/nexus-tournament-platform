const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const settings = require('../../../settings/settings');

var opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeader(),
    secretOrKey: settings.jwt.secret,
    issuer: settings.jwt.issuer,
};

let strategy = new JwtStrategy(opts, (payload, done) => {
    console.log(payload);
    done(null, { name: "Testing" });
});

module.exports = strategy;