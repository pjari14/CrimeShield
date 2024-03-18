require("dotenv").config();
const express = require("express");
require("./ConnectDatabase");
const cors = require("cors");
const users = require("./Models/UserModel");
const police = require("./Models/PoliceModel");
const crime = require("./Models/CrimeModel");
const criminals = require("./Models/CriminalsModel");
const CaseHistory = require("./Models/CaseHistory");
const complaint = require("./Models/ComplaintModel");
const incident = require("./Models/Incident");
const suspect = require("./Models/Suspect");
const lawyer = require("./Models/Lawyer");
const evidence = require("./Models/Evidence");
const { SESSION_SECRET } = process.env;
const passport = require("passport");
const expressSession = require("express-session");
const cookieParser = require("cookie-parser");
const complaintRoute = require("./Routes/complaintRoute");
const IncidentRoute = require("./Routes/incidentRoute");
const LawyerRoute = require("./Routes/lawyerRoute");

const app = express();

app.set("trust proxy", 1);

// To parse data in incoming requests.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// To use cookies and sessions in your application.
app.use(cookieParser(SESSION_SECRET));
app.use(
  expressSession({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      // sameSite: "None",
      // secure: true,
      // httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

// To Enable Requests from CLIENT_URL.
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers, *, Access-Control-Allow-Origin",
    "Origin, X-Requested-with, Content_Type,Accept,Authorization",
    "http://localhost:3000"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT,POST,PATCH,DELETE,GET");
    return res.status(200).json({});
  }
  next();
});

// To integrate Passport strategies with the Server.
require("./Utilities/PassportConfig");
app.use(passport.initialize());
app.use(passport.session());

app.use("/user", require("./Routes/UserRoute"));
app.use("/complaint", complaintRoute);
app.use("/incident", IncidentRoute);
app.use("/lawyer", LawyerRoute);

// To handle errors in your application.
app.use((err, req, res, next) => {
  const status = 500;
  console.log(err);
  if (err.name === "InternalOAuthError") {
    return res.redirect("http://localhost:3000");
  } else {
    return res.status(status).json({ msg: "Internal Server Error!", err });
  }
});

app.listen(5000, () => {
  console.log("Server Running on Port 5000!");
});
