const express = require('express');
const lawyerController = require('../controller/lawyerController');

const router = express.Router();

// const lawyerController = require('./../controllers/lawyerController');

// router.route('/user/createuser').post(lawyerController.createUser);

// router.get("/get", async (req, res) => {
//   return res.status(404).json({ msg: "Hello Lawdwe!" });
// });

router
  .route('/')
  .post(lawyerController.createLawyer)
  .get(lawyerController.showData);

router  
  .route('/:id')
  .get(lawyerController.showonerecord)
  .patch(lawyerController.updateLawyer)
  .delete(lawyerController.deleteLawyer);




// router.post("/login", async (req, res) => {
//   const u = req.body;
//   return res.status(200).json({ u, msg: "Bhag"});
// });

module.exports = router;
