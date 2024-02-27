const mongoose = require ("mongoose");

const complaintSchema  =new mongoose.Schema({

    Name: {
        type:String,
        required:true,
    },
    Email: {
        type:String,
        required:true,
        unique:true,
    },
    ContactNo :{
        type:String,
        required:true,
    },
    Address: {
        type:String,
        required:true,
    },
    City: {
        type:String,
        required:true,
    },
    State: {
        type: String,
        required:true,
    },
    Date: {
        type: Date,
        required:true,
        default: Date.now,
    },
});

const complaint = mongoose.model("complaint",complaintSchema); 

module.exports = complaint;