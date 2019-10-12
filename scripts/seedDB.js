//*****************************************Example code below************************ */
const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Pets collection and inserts the pets below

//*********************************************Change db name below */
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/petslist"
);

const petSeed = [
  {
    name: "Fluffy",
    author: "Stephen King",
    synopsis:
      "Good boi.",
    date: new Date(Date.now())
  },
  {
    name: "Doggo",
    author: "William Golding",
    synopsis:
      "Loves food.",
    date: new Date(Date.now())
  },
  {
    name: "Rex",
    author: "J.D. Salinger",
    synopsis:
      "Likes to fetch.",
    date: new Date(Date.now())
  }
];



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
