const Complaint = require('../Models/ComplaintModel');
const createComplaint= async (req,res)=>{
    try{

        const data = await Complaint.create(req.body);
        res.status(201).json({
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

const showData = async (req,res)=>{
    try{
        const data =await Complaint.find()
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
        const data=await Complaint.findOne(req.params.id);
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

const updateComplaint = async (req,res)=>{
    try{
        const data=await Complaint.findByIdAndUpdate(req.params.id,req.body,{
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

const deleteComplaint = async(req,res)=>{
    try{
        const data= await Complaint.findByIdAndDelete(req.params.id);
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
    createComplaint,
    showData,
    showonerecord,
    updateComplaint,
    deleteComplaint,
}

