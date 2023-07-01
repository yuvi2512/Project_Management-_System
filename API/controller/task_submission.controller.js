import '../models/connection.js';
import task_SubmissionSchemaModel from '../models/task_submission.model.js';
import url from 'url';

export const save = async (req,res,next)=>
{
var task_SubmissionList = await task_SubmissionSchemaModel.find().sort({"_id":-1});

var _id=(task_SubmissionList.length==0?1:task_SubmissionList[0]._id+1);
var task_SubmissionDetails={...req.body,"_id":_id,"info":Date()};
var p=await task_SubmissionSchemaModel.create(task_SubmissionDetails);
if(p)
 return res.status(201).json({"status":true});
else
 return res.status(500).json({"status": false});
}

export const fetch = async (req,res,next)=>
{
var condition_object = url.parse(req.url,true).query;
var task_SubmissionList = await task_SubmissionSchemaModel.find(condition_object);
if(task_SubmissionList.length!=0)
return res.status(201).json(task_SubmissionList)
else
return res.status(500).json({"result":"server error"});
}

export const deletetask_Submission =async(req,res,next)=>
{
    var condition_obj=JSON.parse(req.body.condition_obj);
    var task_SubmissionList= await task_SubmissionSchemaModel.find(condition_obj);
    if(task_SubmissionList!=0)
    {
        let result=await task_SubmissionSchemaModel.deleteMany(condition_obj);
        if(result)
        return res.status(201).json({"msg":"record deleted "})
        else
        return res.status(500).json({error:"server error"})
    }
    else
    return res.status(404).json({error:"resource not found"})
}

export const updatetask_Submission=async(req,res,next)=>{
    let pDetails = await task_SubmissionSchemaModel.findOne(JSON.parse(req.body.condition_obj));
    if(pDetails){
       let result=await task_SubmissionSchemaModel.updateOne(JSON.parse(req.body.condition_obj),{$set: JSON.parse(req.body.content_obj)});   
       if(result)
        return res.status(201).json({"msg":"record updated successfully"});
       else
        return res.status(500).json({error: "Server Error"});
    }
    else
     return res.status(404).json({error: "Requested resource not available"});
  }
  