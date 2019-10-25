const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
  title: { type: String, required: true }, // Same info as what displays on cards goes here...?s
  author: { type: String, required: true },
  description: String,
  date: { type: Date, default: Date.now }
});

const Favorite = mongoose.model("Favorites", favoriteSchema);

module.exports = Favorite;