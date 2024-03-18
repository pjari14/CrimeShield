const Complaint = require("../Models/ComplaintModel");

const createComplaint = async (req, res) => {
  try {
    const details = req.body.details;
    const data = await Complaint.create(details);
    res.status(201).json({
      status: "success",
      data: {
        data,
      },
    });
    // const newComplaint = new Complaint({
    //   ...details,
    // })
    // newComplaint.save().then((Complaint)=>{
    //   return res.status(200).json({
    //     success:true,
    //     msg: "complaint registered successfully",
    //   })
    // })
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err.message,
    });
  }
};

const showData = async (req, res) => {
  try {
    const data = await Complaint.find();
    res.status(200).json({
      status: "success",
      data: {
        data,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      error: err,
    });
  }
};

const showonerecord = async (req, res) => {
  try {
    const data = await Complaint.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        data,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      error: err,
    });
  }
};

const updateComplaint = async (req, res) => {
  try {
    const data = await Complaint.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        data,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err,
    });
  }
};

const deleteComplaint = async (req, res) => {
  try {
    const data = await Complaint.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: {
        data: null,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err,
    });
  }
};

module.exports = {
  createComplaint,
  showData,
  showonerecord,
  updateComplaint,
  deleteComplaint,
};
