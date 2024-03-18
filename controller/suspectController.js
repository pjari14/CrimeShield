const Suspect = require('../Models/Suspect');

const createSuspect= async (req,res)=>{
    console.log(req.body.suspect)
    try{
        const suspect = req.body.suspect;
        const data = await Suspect.create(suspect);
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
        const data =await Suspect.find(req.query)
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
        const data=await Suspect.findOne(req.params.id);
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

const updateSuspect = async (req,res)=>{
    try{
        const data=await Suspect.findByIdAndUpdate(req.params.id,req.body,{
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

const deleteSuspect = async(req,res)=>{
    try{
        const data= await Suspect.findByIdAndDelete(req.params.id);
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
    createSuspect,
    showData,
    showonerecord,
    updateSuspect,
    deleteSuspect,
}

