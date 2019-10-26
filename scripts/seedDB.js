const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Pets collection and inserts the pets below

module.exports = {
  'url': 'mongodb://localhost/petslist'
};

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/petslist"
);

const petSeed = [
  {
    name: "Snoopy",
    id: "00000001",
    type: "Dog",
    species: "N/A",
    breed: "Mixed",
    size: "Medium",
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
    species: "N/A",
    breed: "Siamese",
    size: "Small",
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
    size: "Small",
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
    size: "Large",
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
    species: "N/A",
    breed: "Thoroughbred",
    size: "Large",
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
    size: "Small",
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
    species: "N/A",
    breed: "Mini rex",
    size: "Medium",
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
    size: "Large",
    age: "6",
    gender: "M",
    description:
      "Will eat absolutely anything.",
    date: new Date(Date.now())
  }
];


const userSeed = [
  {
    username: "Sarah",
    password: "password",
    roles: [
      { role: 'readwrite', db: 'userSeed' }
    ]
  },
  {
    username: "Chaa'lissa",
    password: "password",
    roles: [
      { role: 'readwrite', db: 'userSeed' }
    ]
  },
  {
    username: "Marco",
    password: "password",
    roles: [
      { role: 'readwrite', db: 'userSeed' }
    ]
  },
  {
    username: "Nicole",
    password: "password",
    roles: [
      { role: 'readwrite', db: 'userSeed' }
    ]
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

