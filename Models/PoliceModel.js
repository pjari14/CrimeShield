const mongoose = require("mongoose");

const policeSchema = new mongoose.Schema(
  {
    StationName: {
      type: String,
      required: true,
      default: null,
    },
    location: {
      type: String,
      required: true,
      default: null,
    },
    contactInfo: {
      type: Number,
      required: true,
      default: null,
    },
  },

  {
    timestamps: true,
  }
);

const police = new mongoose.model("police", policeSchema);
module.exports = police;
