import '../models/connection.js';
import GroupSchemaModel from '../models/group.model.js';
import url from 'url';

export const save = async (req,res,next)=>
{
var GroupList = await GroupSchemaModel.find().sort({"_id":-1});
var _id=(GroupList.length==0?1:GroupList[0]._id+1);
var GroupDetails={...req.body,"_id":_id};
var p=await GroupSchemaModel.create(GroupDetails);
if(p)
 return res.status(201).json({"status":true});
else
 return res.status(500).json({"status": false});
}

export const fetch = async (req,res,next)=>
{
var condition_object = url.parse(req.url,true).query;
var GroupList = await GroupSchemaModel.find(condition_object);
if(GroupList.length!=0)
return res.status(201).json(GroupList)
else
return res.status(500).json({"result":"server error"});
}

export const deleteGroup =async(req,res,next)=>
{
    var condition_obj=JSON.parse(req.body.condition_obj);
    var GroupList= await GroupSchemaModel.find(condition_obj);
    if(GroupList!=0)
    {
        let result=await GroupSchemaModel.deleteMany(condition_obj);
        if(result)
        return res.status(201).json({"msg":"record deleted "})
        else
        return res.status(500).json({error:"server error"})
    }
    else
    return res.status(404).json({error:"resource not found"})
}

export const updateGroup=async(req,res,next)=>{
    let pDetails = await GroupSchemaModel.findOne(JSON.parse(req.body.condition_obj));
    if(pDetails){
       let result=await GroupSchemaModel.updateOne(JSON.parse(req.body.condition_obj),{$set: JSON.parse(req.body.content_obj)});   
       if(result)
        return res.status(201).json({"msg":"record updated successfully"});
       else
        return res.status(500).json({error: "Server Error"});
    }
    else
     return res.status(404).json({error: "Requested resource not available"});
  }