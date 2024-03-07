const router = require("express").Router();
const passport = require("passport");
const User = require("../Models/UserModel");
const CLIENT_URL = process.env.CLIENT_URL;
const { hashPassword } = require("../Utilities/EncryptPassword");

// To allow users to create a new account.
router.post("/register", async (req, res, next) => {
  try {
    const user = req.body.user;
    const checkUser = await User.findOne({ email: user.email });
    if (checkUser) {
      return res
        .status(401)
        .json({ success: false, message: "User Already Exists!" });
    }
    const hashedPassword = hashPassword(user.password);
    const newUser = new User({
      ...user,
      password: hashedPassword,
    });
    newUser.save().then((User) => {
      req.login(User, (err) => {
        if (err) {
          return res.status(500).json({ success: false, err });
        } else {
          return res.status(200).json({
            success: true,
            msg: "User Registered Successfully!",
          });
        }
      });
    });
  } catch (err) {
    next(err);
  }
});

// To allow users to login into their account.
router.post("/login", async (req, res, next) => {
  try {
    passport.authenticate("local", (err, user) => {
      if (user) {
        req.login(user, (err) => {
          if (err) {
            return res.status(500).json({ success: false, err });
          } else {
            return res
              .status(200)
              .json({ success: true, message: "User Logged In Successfully!" });
          }
        });
      } else {
        return res
          .status(400)
          .json({ success: false, message: "Invalid Email or Password!" });
      }
    })(req, res, next);
  } catch (error) {
    next(error);
  }
});

// To allow Logged In users to access their details.
router.get("/get", (req, res, next) => {
  try {
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    return res.status(200).json({ success: true, user: req.user });
  } catch (error) {
    next(error);
  }
});

// To allow logged in users to logout from their account.
router.get("/logout", (req, res, next) => {
  try {
    req.logout((err) => {
      if (err) {
        return res
          .status(500)
          .json({ success: false, message: "User Logout Unsuccessful!" });
      }
      return res
        .status(200)
        .json({ success: true, message: "User Logout Successfull!" });
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
