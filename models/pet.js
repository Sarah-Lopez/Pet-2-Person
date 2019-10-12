const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema({
  type: { type: String, required: true },
  species: { type: String, required: true },
  breed: { type: String, required: true },
  id: { type: String, required: true },
  name: { type: String, required: true },
  age: { type: String, required: true },
  gender: { type: String, required: true },
  description: String,
  date: { type: Date, default: Date.now }
});

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;
