const passport = require('passport');

module.exports = app => {
app.post('/login',
  passport.authenticate('local', 
        { successRedirect: '/',
          failureRedirect: '/login',
          failureFlash: true })
);

app.get('/auth/facebook',
  passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

}