
// const passport = require('passport');
const db = require("../../models");
const router = require("express").Router();

module.exports = function (app) {

  /*
  ***** SIGN UP *****
  */

  router.post("/signup", (req, res, next) => {
    // console.log(req.body)
    // const { body } = req;
    // const {
    //   username,
    //   password
    // } = body;

    const body = req.body;
    const {
      password
    } = body;
    let {
      username
    } = body;

    if (!username) {
      return res.send({
        success: false,
        message: 'Error: Username cannot be blank.'
      });
    }
    if (!password) {
      return res.send({
        success: false,
        message: 'Error: Password cannot be blank.'
      });
    }

    console.log("here");

    // Verify the User doesn't exist and save new User
    db.User.find({
      username: username
    }, (err, previousUsers) => {
      if (err) {
        return res.status(500).send({
          message: 'Error: Server error'
        });
      // } else if (previousUsers.length > 0) {
      } else if (previousUsers.length !=0) {
        return res.status(200).send({
          message: 'Error: Username cannot be used.'
        });
      }
      else {
      const newUser = new User();

      newUser.username = username;
      newUser.password = newUser.generateHash(password);
      newUser.save((err, user) => {
        if (err) {
          return res.end({
            success: false,
            message: 'Error: Server error'
          });
        }
        return res.send({
          success: true,
          message: 'Signed Up'
        });
      });
    }
    });

  });

  router.post("/signin", (req, res, next) => {
    const { body } = req;
    const {
      username,
      password
    } = body;

    if (!username) {
      return res.send({
        success: false,
        message: 'Error: Username cannot be blank.'
      });
    }
    if (!password) {
      return res.send({
        success: false,
        message: 'Error: Password cannot be blank.'
      });
    }

    db.User.find({
      username: username
    }, (err, users) => {
      if (err) {
        return res.end({
          success: false,
          message: 'Error: Server error'
        });
      }
      if (users.length != 1) {
        return res.send({
          success: false,
          message: 'Error: Invalid'
        });
      }

      const user = users[0];
      if (!user.validPassword(password)) {
        return res.send({
          success: false,
          message: 'Error: Invalid'
        });
      }

      //Otherwise correct user

      const userSession = new UserSession();
      userSession.userId = user._id;
      userSession.save((err, doc) => {
        if (err) {
          console.log(err);
          return res.send({
            success: false,
            message: 'Error: Server error'
          });
        }

        return res.send({
          success: true,
          message: 'Valid sign in',
          token: doc._id
        });
      });

    });


  });

  router.get('/verify', (req, res, next) => {
    // Get tokem
    const { query } = req;
    const { token } = query;
    // ?token=test

    // Verify token is unique and it's not deleted.

    db.UserSession.find({
        _id: token,
        isDeleted: false
    }, (err, sessions) => {
        if (err) {
            return res.send({
                success: false,
                message: 'Error: Server error'
            });
        }

        if (sessions.length != 1) {
            return res.send({
                success: false,
                message: 'Error: Invalid'
            });
        } else {
            return res.send({
                success: true,
                message: 'Good'
            });
        }
    });
});

router.get('/logout', (req, res, next) => {
  // Get tokem
  const { query } = req;
  const { token } = query;
  // ?token=test

  // Verify token is unique and it's not deleted.

  db.UserSession.findOneAndUpdate({
      _id: token,
      isDeleted: false
  }, {
      $set: {isDeleted:true}
  }, null, (err, sessions) => {
      if (err) {
          return res.send({
              success: false,
              message: 'Error: Server error'
          });
      
      } else {
          return res.send({
              success: true,
              message: 'Good'
          });
      }
  });

});







  /*
  **********   Passport Login Code   **********
  **********   Currently Not in Use  **********
  */



  // router.post('/logging',
  //   function(req, res, next) {
  //     console.log('routes/login.js: ');
  //     console.log(req.body);
  //     next()
  //   },
  //   passport.authenticate('local'),
  //   (req, res) => {
  //     console.log('logged in', req.user);
  //     var userInfo = {
  //       username: req.user.username
  //     };
  //     res.send(userInfo);
  //   }
  // )

  //     // process the signup form
  //     app.post('/signup', passport.authenticate('local-signup', {
  //       successRedirect : '/profile', // redirect to the secure profile section
  //       failureRedirect : '/signup', // redirect back to the signup page if there is an error
  //       failureFlash : true // allow flash messages
  //   }));

  //   // process the login form
  //   app.post('/login', passport.authenticate('local-login', {
  //     successRedirect : '/profile', // redirect to the secure profile section
  //     failureRedirect : '/login', // redirect back to the signup page if there is an error
  //     failureFlash : true // allow flash messages
  // }));

  // // app.post("/signup", function (req, res) {
  // //   db.User.create({
  // //     username: req.body.username,
  // //     password: req.body.password,
  // //     // email: req.body.email,
  // //     // fullname: req.body.fullname
  // //   }).then(function (dbUser) {
  // //     res.redirect("/login");
  // //   });
  // // });

  // // app.post("/auth", function (req, res) {
  // //   const username = req.body.username;
  // //   const password = req.body.password;
  // //   if (username && password) {
  // //     db.User.findOne({
  // //       where: {
  // //         username: username,
  // //         password: password
  // //       }
  // //     }).then(function (response) {
  // //       if (response) {
  // //         req.session.loggedin = true;
  // //         req.session.username = username;
  // //         res.redirect("/");
  // //         // res.redirect("/index.html?username="+username);
  // //       } else {
  // //         res.send('Incorrect Username and/or Password!');
  // //       }
  // //       res.end();
  // //     });
  // //   } else {
  // //     res.send("Please enter Username and Password!");
  // //     res.end();
  // //   }
  // // });

  // app.get("/logout", function (req, res) {
  //   req.logout();
  //   res.redirect("/");
  // });

};
