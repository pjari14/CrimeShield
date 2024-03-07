require("dotenv").config();
const express = require("express");
require("./ConnectDatabase");
const users = require("./Models/UserModel");
const police = require("./Models/PoliceModel");
const crime = require("./Models/CrimeModel");
const criminals = require("./Models/CriminalsModel");
const CaseHistory = require("./Models/CaseHistory");
const complaint = require("./Models/Complaint");
const incident = require("./Models/Incident");
const suspect = require("./Models/Suspect");
const lawyer = require("./Models/Lawyer");
const evidence = require("./Models/Evidence");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("./Utilities/PassportConfig");
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use("/user", require("./Routes/UserRoute"));

app.listen(5000, () => {
  console.log("Server Started on Port 5000!");
});
