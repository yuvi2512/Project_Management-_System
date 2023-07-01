import mongoose from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';
const task_submissionSchema = mongoose.Schema({
    _id:Number,
    Stitle:{
        type:String,
        requirede:[true,"title required"],
        unique:true,
        trim:true,
    },
    grName:{
        type:String,
        requirede:[true,"name required"],
        unique:true,
        trim:true,
    },
    descripiton:{
        type:String,
        requirede:[true,"description required"],
        trim:true,
    },
    fileName:{
        type:String,
        requirede:[true,"description required"],
        trim:true,
    },
    info:String,
});
task_submissionSchema.plugin(mongooseUniqueValidator);
const taskSubmissionSchemaModel = mongoose.model('task_Submission',task_submissionSchema);
export default taskSubmissionSchemaModel;