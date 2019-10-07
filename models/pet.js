
//*************************************Example code below*************************** */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;
