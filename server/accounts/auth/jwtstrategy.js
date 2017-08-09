const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const settings = require('../../../settings/settings');

var opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
    secretOrKey: settings.jwt.secret
};

let strategy = new JwtStrategy(opts, (payload, done) => {
    done(null, { user: payload.user });
});

module.exports = strategy;