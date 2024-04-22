import passport from 'passport';
import {OAuth2Strategy as GoogleAuthStratgey} from 'passport-google-oauth';
import crypto from 'crypto';
import User  from '../model/User.js';

passport.use(new GoogleAuthStratgey({
    clientID: '608333323272-8lh49vu1drbo85s9amt8tc2fiq1qiias.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: 'https://ourninjas.onrender.com/user/auth/google/callback'
},
function (accessToken, refreshToken, profile, done) {
    // console.log(profile)
    User.findOne({userEmail: profile.emails[0].value }).then(user => {
        console.log(profile)
        console.log(profile.photos[0].value)
        if (user) {
            return done(null, user);
        } else {
            User.create({
                userName: profile.displayName,
                userEmail: profile.emails[0].value,
                userPassword: crypto.randomBytes(20).toString('hex'),
                profile: profile.photos[0].value,
                userAddress:'dummy'
                
            }).then(user => {
                return done(null, user);
            }).catch(err => {
                console.log("There is problem with Creation User", err);
                return;
            })
        }
    }).catch(err => {
        console.log("there is problem with finding user in google oauth", err);
        return;
    })
}
))
export default passport;
