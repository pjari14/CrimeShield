require("dotenv").config();
const express = require("express");
require("./ConnectDatabase");
const users = require("./Models/UserModel");
const police = require("./Models/PoliceModel");
const crime = require("./Models/CrimeModel");
const criminals = require("./Models/CriminalsModel");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", require("./Routes/UserRoute"));

app.listen(5000, () => {
  console.log("Server Started on Port 5000!");
});
