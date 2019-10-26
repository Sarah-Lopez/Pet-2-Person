const express = require("express");

const mongoose = require("mongoose");
require('dotenv').config();
const passport = require('passport')
// const LocalStrategy = require('passport-local').Strategy;
// const db = require("./models");
const flash = require('connect-flash');
const routes = require("./routes");
const morgan = require('morgan')
const app = express();
const PORT = process.env.PORT || 3001;


const configDB = require('./scripts/seedDB');
mongoose.connect(configDB.url); // connect to our database
// const app = express();



// Passport Config Code
require('./config/passport')(passport);

app.use(require('serve-static')(__dirname + '/../../public'));
app.use(morgan('dev'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(
    require('express-session')({ 
        secret: 'keyboard cat', 
        resave: false,
        saveUninitialized: false 
    })
);
// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


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
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/petslist"
);


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
