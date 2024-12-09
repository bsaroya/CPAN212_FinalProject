const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  userId: String,
  animalId: String,
  applicationDetails: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Application", applicationSchema);
