const express = require('express');
const complaintController = require('../controller/complaintController');

const router = express.Router();

// const complaintController = require('./../controllers/complaintController');

// router.route('/user/createuser').post(complaintController.createUser);

// router.get("/get", async (req, res) => {
//   return res.status(404).json({ msg: "Hello Lawdwe!" });
// });

router
  .route('/')
//   .post(complaintController.createComplaint)
  .get(complaintController.showData);

router.route('/insert').post(complaintController.createComplaint);

router  
  .route('/:id')
  .get(complaintController.showonerecord)
  .patch(complaintController.updateComplaint)
  .delete(complaintController.deleteComplaint);




// router.post("/login", async (req, res) => {
//   const u = req.body;
//   return res.status(200).json({ u, msg: "Bhag"});
// });

module.exports = router;
