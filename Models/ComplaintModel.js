const mongoose = require ("mongoose");

const ComplaintSchema  =new mongoose.Schema({

    fname: {
        type:String,
        required:[true,"First name is required"]
    },
    lname: {
        type:String,
        required: [true,"Last name is required"]
    },
    email: {
        type:String,
        required:[true,'Email is required']
    },
    contactno:{
        type:String,
        required:[true,'Contact number is required']
    },
    address: {
        type:String,
        required:[true,"Address is required"]
    },
    idproof:{
        type:String
    },
    date: {
        type: Date,
        required:[true,"Date is required"],
        default: Date.now
    }
});

const Complaint = mongoose.model("complaints",ComplaintSchema); 

module.exports = Complaint;