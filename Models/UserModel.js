const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      default: null,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    userType: {
      type: String,
      required: true,
      enum: ["Admin", "Police", "Public"],
      default: "Public",
    },
  },
  {
    timestamps: true,
  }
);

const users = new mongoose.model("users", userSchema);

module.exports = users;
