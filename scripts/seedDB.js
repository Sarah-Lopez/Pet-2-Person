const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Pets collection and inserts the pets below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/favorites"
);

const favorites = [
  {
    name: "Snoopy",
    id: "00000001",
    type: "Dog",
    breed: "Mixed",
    age: "4",
    gender: "M",
    description:
      "Good boi.",
    date: new Date(Date.now())
  },
  {
    name: "Snowball",
    id: "00000002",
    type: "Cat",
    breed: "Siamese",
    age: "7",
    gender: "F",
    description:
      "Loves food.",
    date: new Date(Date.now())
  },
  {
    name: "Tweetie",
    id: "00000003",
    type: "Bird",
    species: "Canary",
    breed: "n/a",
    age: "1",
    gender: "M",
    description:
      "Likes to sing.",
    date: new Date(Date.now())
  },
  {
    name: "Godzilla",
    id: "00000004",
    type: "Scalesfinsother",
    species: "Bearded dragon",
    breed: "N/A",
    age: "3",
    gender: "F",
    description:
      "Will destroy everything in sight.",
    date: new Date(Date.now())
  },
  {
    name: "Mr Ed",
    id: "00000005",
    type: "Horse",
    breed: "Thoroughbred",
    age: "9",
    gender: "M",
    description:
      "Talking horse. Enough said.",
    date: new Date(Date.now())
  },
  {
    name: "Hamptaro",
    id: "00000006",
    type: "Smallnfurry",
    species: "Hamster",
    breed: "Syrian",
    age: "2",
    gender: "M",
    description:
      "Cute as a button.",
    date: new Date(Date.now())
  },
  {
    name: "Bugs",
    id: "00000007",
    type: "Rabbit",
    breed: "Mini rex",
    age: "5",
    gender: "M",
    description:
      "As sassy as he sounds.",
    date: new Date(Date.now())
  },
  {
    name: "Billy",
    id: "00000008",
    type: "Barnyard",
    species: "Goat",
    breed: "Boer",
    age: "6",
    gender: "M",
    description:
      "Will eat absolutely anything.",
    date: new Date(Date.now())
  }
];


db.Pet
  .remove({})
  .then(() => db.Pet.collection.insertMany(favorites))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
