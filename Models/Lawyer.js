const mongoose = require("mongoose");

const lawyerSchema = new mongoose.Schema(
    {
        Name: {
            type : String,
            require : true,
        },
        OfficeAddess: {
            type: String,
            require: true,
        },
        Email:{
            type:String,
            required:true,
            unique:true,
        },
        ContactNo: {
            type: String,
            require:true,
        },
        City: {
            type:String,
            require:true,
        },
        State:{
            type:String,
            require:true,
        },
        Experience:{
            type:String,
            require:true,
        },
        PracticeAreas: {
            type:String,
            require:true,
        },
        Court: {
            type:String,
            require:true,
            enum:["High Court","Supreme Court","District Court"],
            default:"public",
        },
});

const lawyer = new mongoose.model("lawyer",lawyerSchema);

module.exports = lawyer;