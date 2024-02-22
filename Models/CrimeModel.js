const mongoose = require("mongoose");

const crimeSchema = new mongoose.Schema(
  {
    CrimeType: {
      type: String,
      default: null,
      required: true,
    },
    CrimeDescription: {
      type: String,
      default: null,
      required: false,
    },
    CrimeDateTime: {
      type: Date,
      default: Date.now,
    },
    Location: {
      type: String,
      default: null,
    },
    Status: {
      type: String,
      required: true,
      enum: ["Pending", "Investigating", "Solved", "Close"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

const crime = new mongoose.model("crimes", crimeSchema);

module.exports = crime;
