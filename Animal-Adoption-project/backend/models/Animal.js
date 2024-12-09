const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({
  name: String,
  breed: String,
  age: Number,
  health: String,
  type: String,
});

module.exports = mongoose.model("Animal", animalSchema);
