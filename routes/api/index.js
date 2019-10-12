const router = require("express").Router();
const petRoutes = require("./pets");
const petFinder = require("./petfinder-api")

// Pet routes
router.use("/pets", petRoutes);
// console.log(petFinder);s


module.exports = router;
