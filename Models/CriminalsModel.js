const mongoose = require("mongoose");

const criminalSchema = new mongoose.Schema({
  CriminalName: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  CrimeID: {
    type: mongoose.Types.ObjectId,
    ref: "crimes",
    required: true,
  },
  Status: {
    type: String,
    enum: ["Captured", "Uncaptured"],
    default: "Uncaptured",
  },
});

const criminals = mongoose.model("criminals", criminalSchema);

module.exports = criminals;
