const router = require("express").Router();
// const petRoutes = require("./pets");
const petFinder = require("./petfinder-api");
const petRoutes = require("./pet-routes");

// Pet routes
 router.use("/pets", petRoutes);
/*
console.log("PetFinder");
// console.log(petFinder);
console.log(petFinder.tokenCall());
console.log("PetRoutes");
// console.log();

*/
module.exports = router;

// console.log("PetFinder", pet);