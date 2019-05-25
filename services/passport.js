// const passport = require("passport");
// const LocalStrategy = require("passport-local");
// const FacebookStrategy = require("passport-facebook");
// const GoogleStrategy = require("passport-google-oauth20").Strategy;
// require('dotenv').config()


// passport.use(new LocalStrategy(
//     function(username, password, done) {
//       User.findOne({ username: username }, function(err, user) {
//         if (err) { return done(err); }
//         if (!user) {
//           return done(null, false, { message: 'Incorrect username.' });
//         }
//         if (!user.validPassword(password)) {
//           return done(null, false, { message: 'Incorrect password.' });
//         }
//         return done(null, user);
//       });
//     }
//   ));
  
//   passport.use(new FacebookStrategy({
//     clientID: process.env.FACEBOOK_APP_ID,
//     clientSecret:process.env.FACEBOOK_APP_SECRET,
//     callbackURL: 'http://localhost:3000/auth/facebook/callback',
//   }, (accessToken )=>  {
//     console.log(accessToken);
//   })
//   );
  
//   passport.use(new GoogleStrategy({
//     clientID: process.env.googleclientID,
//     clientSecret:process.env.googleclientSecret,
//     callbackURL: 'http://localhost:3000/auth/google/callback',
//   }, (accessToken )=>  {
//     console.log(accessToken);
//   })
//   );
  