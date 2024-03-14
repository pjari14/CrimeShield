const Incident = require('../Models/Incident');
const {Complaint} = require('../Models/ComplaintModel');

const createIncident= async (req,res)=>{
    try{
        // const {complaintId} = req.body;
        // const complaint = Complaint.findOne({_id: complaintId});
        // if(complaint){

            const data = await Incident.create(req.body);
            res.status(201).json({
                status: "success",
                data:{
                    data
                }
            })
        // }
        // else{
            // throw new Error(`Complaint With Id ${complaintId} Not Found`);
        // }
    }catch(err){
        res.status(404).json({
            status: "fail",
            error: err
        })
    }
}

const showData = async (req,res)=>{
    try{
        const data =await Incident.find()
        res.status(200).json({
            status: "success",
            data:{
                data
            }
        })
    }catch(err){
        res.status(404).json({
            status: "fail",
            error: err
        })
    }
}

const showonerecord = async (req,res)=>{
    try{
        const data=await Incident.findById(req.params.id);
        res.status(200).json({
            status: "success",
            data:{
                data
            }
        })

    }catch(err){
        res.status(404).json({
            status: "fail",
            error: err
        })
    }
}

const updateIncident = async (req,res)=>{
    try{
        const data=await Incident.findByIdAndUpdate(req.params.id,req.body,{
            new: true,
            runValidators: true
        })
        res.status(200).json({
            status: 'success',
            data: {
                data
            }
        })
    }catch(err){
        res.status(400).json({
            status: "fail",
            error: err
        })
    }
}

const deleteIncident = async(req,res)=>{
    try{
        const data= await Incident.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: "success",
            data:{
                data: null
            }
        })
    }catch(err){
        res.status(400).json({
            status: "fail",
            error: err
        })
    }
}

module.exports={
    createIncident,
    showData,
    showonerecord,
    updateIncident,
    deleteIncident,
}

