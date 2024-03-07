const mongoose = require("mongoose");

const caseSchema = new mongoose.Schema(
  {
    CrimeID: {
      type: mongoose.Types.ObjectId,
      ref: "crimes",
      required: true,
    },
    Description: {
      type: String,
      default: null,
      required: false,
    },
    Date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const casehistory = mongoose.model("casehistory", caseSchema);

module.exports = casehistory;
