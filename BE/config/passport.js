const secret =  require('./key');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const user= require('./../models/user');
const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = secret.secret;
module.exports = (passport) => passport.use(new JwtStrategy(options, function(jwt_payload, done) {
    user.findOne({id: jwt_payload.id,email:jwt_payload.email}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, {
                name: user.name,
                email: user.email
            });
        } else {
            return done(null, false);
        }
    });
}));
