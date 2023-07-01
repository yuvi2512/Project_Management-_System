import '../models/connection.js';
import Assign_taskSchemaModel from '../models/assign_task.model.js';
import url from 'url';

export const save = async (req,res,next)=>
{
var Assign_taskList = await Assign_taskSchemaModel.find().sort({"_id":-1});

var _id=(Assign_taskList.length==0?1:Assign_taskList[0]._id+1);
var Assign_taskDetails={...req.body,"_id":_id,"info":Date()};
var p=await Assign_taskSchemaModel.create(Assign_taskDetails);
if(p)
 return res.status(201).json({"status":true});
else
 return res.status(500).json({"status": false});
}

export const fetch = async (req,res,next)=>
{
var condition_object = url.parse(req.url,true).query;
var Assign_taskList = await Assign_taskSchemaModel.find(condition_object);
if(Assign_taskList.length!=0)
return res.status(201).json(Assign_taskList)
else
return res.status(500).json({"result":"server error"});
}

export const deleteAssign_task =async(req,res,next)=>
{
    var condition_obj=JSON.parse(req.body.condition_obj);
    var Assign_taskList= await Assign_taskSchemaModel.find(condition_obj);
    if(Assign_taskList!=0)
    {
        let result=await Assign_taskSchemaModel.deleteMany(condition_obj);
        if(result)
        return res.status(201).json({"msg":"record deleted "})
        else
        return res.status(500).json({error:"server error"})
    }
    else
    return res.status(404).json({error:"resource not found"})
}

export const updateAssign_task=async(req,res,next)=>{
    let pDetails = await Assign_taskSchemaModel.findOne(JSON.parse(req.body.condition_obj));
    if(pDetails){
       let result=await Assign_taskSchemaModel.updateOne(JSON.parse(req.body.condition_obj),{$set: JSON.parse(req.body.content_obj)});   
       if(result)
        return res.status(201).json({"msg":"record updated successfully"});
       else
        return res.status(500).json({error: "Server Error"});
    }
    else
     return res.status(404).json({error: "Requested resource not available"});
  }
  