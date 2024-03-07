const router = require("express").Router();
const passport = require("passport");
const User = require("../Models/UserModel");
const CLIENT_URL = process.env.CLIENT_URL;
const { hashPassword } = require("../Utilities/EncryptPassword");

router.get("/get", async (req, res) => {
  return res.status(404).json({ msg: "Hello" });
});

router.post("/login", async (req, res) => {
  const u = req.body;
  return res.status(200).json({ u, msg: "Working"});
});

module.exports = router;
