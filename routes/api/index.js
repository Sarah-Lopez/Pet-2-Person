const router = require("express").Router();
// const petRoutes = require("./pets");
const petRoutes = require("./pet-routes");
const loginRoutes = require("./login-routes");

// Pet routes
router.use("/pets", petRoutes);
router.use("/account/user", loginRoutes)

module.exports = router;
