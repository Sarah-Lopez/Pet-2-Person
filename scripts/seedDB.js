const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Pets collection and inserts the pets below

module.exports = {
  'url' : 'mongodb://localhost/petslist'
};

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/petslist"
);

// const petSeed = [
// ];

// const userSeed = [
// ];


db.Pet
  .remove({})
  .then(() => db.Pet.collection.insertMany(petSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


  db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });






  
