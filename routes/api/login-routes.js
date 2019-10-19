
const passport = require('passport');
const db = require("../models");

module.exports = function (app) {

  app.post("/login",
    passport.authenticate("local", {
      successRedirect: '/',
      failureRedirect: '/login',
      failureFlash: true
    }),
    function (req, res) {
      req.login(user, function (err) {
        if (err) { return next(err); }
        return res.redirect('/users/' + req.user.username);
      });
      // res.redirect("/");
    }
  );

  app.post("/signup", function (req, res) {
    db.User.create({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      fullname: req.body.fullname
    }).then(function (dbUser) {
      res.redirect("/login");
    });
  });

  app.post("/auth", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    if (username && password) {
      db.User.findOne({
        where: {
          username: username,
          password: password
        }
      }).then(function (response) {
        if (response) {
          req.session.loggedin = true;
          req.session.username = username;
          res.redirect("/");
          // res.redirect("/index.html?username="+username);
        } else {
          res.send('Incorrect Username and/or Password!');
        }
        res.end();
      });
    } else {
      res.send("Please enter Username and Password!");
      res.end();
    }
  });

  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  /*
  // This is for the profile page for users if we get that far
    app.get("/profile",
      require("connect-ensure-login").ensureLoggedIn(),
      function(req, res) {
        res.render('/index.html', { username: req.user.username });
      }
    );*/
};
