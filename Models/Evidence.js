const mongoose = require("mongoose");

const evidenceSchema = new mongoose.Schema(
  {
    EvidenceID: {
      type: String,
      require: true,
    },
    IncidentID: {
      type: mongoose.Types.ObjectId,
      ref: "incidents",
      require: true,
    },
    Description: {
      type: String,
      require: true,
    },
    EvidenceType: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const evidence = new mongoose.model("evidence", evidenceSchema);

module.exports = evidence;
