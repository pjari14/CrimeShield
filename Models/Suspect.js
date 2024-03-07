const mongoose = require ("mongoose");

const suspectSchema = new mongoose.Schema(
    {
        SuspectID: {
            type: mongoose.Types.ObjectId,
            ref: "incidents",
            required: true,
        },
        SuspectName: {
            type:String,
            required: true,
        },
        IDProof: {
            type:String,
            required:true,
        },
        SuspectPhoto: {
            type:String,
            required:true,
        },
        Description:{
            type:String,
            required:false,
            default:null,
        },
}
);

const suspect = new mongoose.model("suspect",suspectSchema);

module.exports = suspect;