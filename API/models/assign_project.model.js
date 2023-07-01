import mongoose from "mongoose";
import UniqueValidator from "mongoose-unique-validator";
const assignProjectSchema = mongoose.Schema({
    _id: Number,
    projectTitle: {
      type: String,
      required: [true,"project title is required"],
      lowercase: true,
      unique: true,
      trim: true,
    },
    groupName:{
        type: String,
      required: [true,"group name is required"],
      lowercase: true,
      unique: true,
      trim: true,
    },
    description:{
        type: String,
        required: [true,"description is required"],
        lowercase: true,
        trim: true,
    },
    startDate:{
        type: String,
        required: [true,"date is required"],
        trim: true,
    },
    endDate:{
        type: String,
        required: [true,"date is required"],
        trim: true,
    },
    info:String
  });
assignProjectSchema.plugin(UniqueValidator);
const assignProjectSchemaModel=mongoose.model('assigned_collection',assignProjectSchema);
export default assignProjectSchemaModel;
