const express = require('express');
const evidenceController = require('../controller/evidenceController');

const router = express.Router();

// const evidenceController = require('./../controllers/evidenceController');

// router.route('/user/createuser').post(evidenceController.createUser);

// router.get("/get", async (req, res) => {
//   return res.status(404).json({ msg: "Hello Lawdwe!" });
// });

router
  .route('/')
  .post(evidenceController.createEvidence)
  .get(evidenceController.showData);

router  
  .route('/:id')
  .get(evidenceController.showonerecord)
  .patch(evidenceController.updateEvidence)
  .delete(evidenceController.deleteEvidence);




// router.post("/login", async (req, res) => {
//   const u = req.body;
//   return res.status(200).json({ u, msg: "Bhag"});
// });

module.exports = router;
