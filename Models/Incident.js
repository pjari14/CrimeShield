const mongoose = require("mongoose");

const incidentSchema = new mongoose.Schema(
    {
        IncidentID: {
            type: mongoose.Types.ObjectId,
            ref: "complaints",
            required: true,
        },
        Category:{
            type:String,
            required:true,
            enum: ["Women/Child related Crime","Cyber Crime","Financial Fraud"],
            default: "Public",
        },
        Date: {
            type : Date,
            default:Date.now,
        },
        
        State: {
            type: String,
            required: true,
        },
        City: {
            type: String,
            required: true,
        },
        PoliceStation: {
            type:String,
            required: true,
        },
        Description: {
            type: String,
            required: false,
            default: null,
        },
        
    }
);

const incident = new mongoose.model("incident",incidentSchema);

module.exports = incident;