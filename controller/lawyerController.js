const Lawyer = require('../Models/Lawyer');
const {Complaint} = require('../Models/ComplaintModel');

const createLawyer= async (req,res)=>{
    try{
       
            const data = await Lawyer.create(req.body);
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
        const data =await Lawyer.find(req.query)
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
        const data=await Lawyer.findOne(req.query);
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

const updateLawyer = async (req,res)=>{
    try{
        const data=await Lawyer.findByIdAndUpdate(req.params.id,req.body,{
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

const deleteLawyer = async(req,res)=>{
    try{
        const data= await Lawyer.findByIdAndDelete(req.params.id);
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
    createLawyer,
    showData,
    showonerecord,
    updateLawyer,
    deleteLawyer,
}

