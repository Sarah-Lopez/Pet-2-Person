const express = require("express");

const mongoose = require("mongoose");
require('dotenv').config();
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;


//Local Strategey to authenticate request
passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
  },
  function(username, password, done) {
    db.User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      } 
      // if (user.password != password) {
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

// Needed to maintain persistent login sessions
passport.serializeUser(function(user, done) {
  done(null, user.id);
});
 
passport.deserializeUser(function(id, done) {
  db.User.findById(id, function (err, user) {
      if (err) {
          return done(err);
        }
        done(null, user);
  });
});


// const app = express();



// Passport Config Code
app.use(require('serve-static')(__dirname + '/../../public'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(
    require('express-session')({ 
        secret: 'keyboard cat', 
        resave: true, 
        saveUninitialized: true 
    })
);
// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
//*******************************************************change DB name below***********************************************************
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/petslist"
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
