const mongoose = require("mongoose");
const { ComplaintSchema } = require("./ComplaintModel");

const incidentSchema = new mongoose.Schema({
  // complaintID: {
  //   // type: ComplaintSchema,
  //   type: mongoose.Types.ObjectId,
  //   // ref: "complaints",
  //   required: true,
  // },
  category: {
    type: String,
    required: true,
    enum: ["Cyber Crime", "Domestic Violence", "Abuse", "Theft", "Robbery"],
  },
  dateofcmp: {
    type: Date,
    default: Date.now,
  },

  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  // policestation: {
  //   type: String,
  //   required: true,
  // },
  dateofincident: {
    type: Date,
  },
  reasonofdelay: {
    type: String,
  },
  location: {
    type: String,
  },
  evidence: {
    type: String,
  },
  nameofsus: {
    type: String,
  },
  additionalinfo: {
    type: String,
    required: false,
    default: null,
  },
});

const incident = new mongoose.model("incident", incidentSchema);

module.exports = incident;
