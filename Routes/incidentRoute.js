const express = require('express');
const incidentController = require('../controller/incidentController');

const router = express.Router();

// const incidentController = require('./../controllers/incidentController');

// router.route('/user/createuser').post(incidentController.createUser);

// router.get("/get", async (req, res) => {
//   return res.status(404).json({ msg: "Hello Lawdwe!" });
// });

router
  .route('/')
  .post(incidentController.createIncident)
  .get(incidentController.showData);

router  
  .route('/:id')
  .get(incidentController.showonerecord)
  .patch(incidentController.updateIncident)
  .delete(incidentController.deleteIncident);




// router.post("/login", async (req, res) => {
//   const u = req.body;
//   return res.status(200).json({ u, msg: "Bhag"});
// });

module.exports = router;
