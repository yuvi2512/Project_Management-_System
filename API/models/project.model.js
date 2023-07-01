import mongoose from "mongoose";
import UniqueValidator from "mongoose-unique-validator";
const ProjectSchema=mongoose.Schema({
    _id:Number,
    ptitle:{
        type:String,
        required:[true,"project title required"],
        lowercase:true,
        trim:true,
    },
    pstream:{
        type:String,
        required:[true,"project stream required"],
        lowercase:true,
        trim:true,
    },
    pdescription:{
        type:String,
        required:[true,"project description required"],
        lowercase:true,
        trim:true,
    }

});
ProjectSchema.plugin(UniqueValidator);
const ProjectSchemaModel=mongoose.model('project_collections',ProjectSchema);
export default ProjectSchemaModel;
