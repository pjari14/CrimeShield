const mongoose = require("mongoose");

const evidenceSchema = new mongoose.Schema(
  {
    complaintID: {
      type: mongoose.Types.ObjectId,
      require: true,
    },
    // IncidentID: {
    //   type: mongoose.Types.ObjectId,
    //   ref: "incidents",
    //   require: true,
    // },
    susname: {
      type:String,
      required: true
    },
    sussocial: {
      type: String
    },
    sususername:{
      type: String
    },
    susphoto:{
      type:String
    },
    otherdetails: {
      type: String
    },
    // EvidenceType: {
    //   type: String,
    //   require: true,
    // },
  },
  {
    timestamps: true,
  }
);

const Evidence = new mongoose.model("evidence", evidenceSchema);

module.exports = Evidence;
