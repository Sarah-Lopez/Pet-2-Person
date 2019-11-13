const router = require("express").Router();
// const petRoutes = require("./pets");
const petRoutes = require("./pet-routes");

// Pet routes
router.use("/pets", petRoutes);

module.exports = router;
