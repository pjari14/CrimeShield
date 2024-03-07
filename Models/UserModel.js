const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      default: null,
    },
    lastname: {
      type: String,
      required: true,
      default: null,
    },
    address: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    ContactNo :{
      type:String,
      required:true,
  },
  Address: {
      type:String,
      required:true,
  },
    userType: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const users = new mongoose.model("users", userSchema);

module.exports = users;
