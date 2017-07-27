const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

var opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeader(),
    secretOrKey: 'rgeeDh1jH8re9Dgrr',
};

let strategy = new JwtStrategy(opts, (payload, done) => {
    console.log(payload);
    done(null, { name: "Testing" });
});

module.exports = strategy;