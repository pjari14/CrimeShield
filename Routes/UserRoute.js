const router = require("express").Router();

router.get("/get", async (req, res) => {
  return res.status(404).json({ msg: "Hello User!" });
});

router.post("/login", async (req, res) => {
  const u = req.body;
  return res.status(200).json({ u, msg: "Bhag lawde!" });
});

module.exports = router;
