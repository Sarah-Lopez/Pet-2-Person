const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/users"
);

const users = [
  {
    username: "Sarah",
    password: "password",
    roles: [
        { role: 'readwrite', db: 'favorites' }
    ]
  },
  {
    username: "Chaa'lissa",
    password: "password",
    roles: [
        { role: 'readwrite', db: 'favorites' }
    ]
  },
  {
    username: "Marco",
    password: "password",
    roles: [
        { role: 'readwrite', db: 'favorites' }
    ]
  },
  {
    username: "Nicole",
    password: "password",
    roles: [
        { role: 'readwrite', db: 'favorites' }
    ]
  }

];


db.createUser({
    user: "",
    password: "",
    roles: [
        { role: 'readOnly', db: 'favorites' }
    ]
})