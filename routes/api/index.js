const router = require("express").Router();
const petRoutes = require("./pets");

// Pet routes
router.use("/pets", petRoutes);

module.exports = router;
