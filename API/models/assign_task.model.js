import mongoose from "mongoose";
import UniqueValidator from "mongoose-unique-validator";
const assignTaskSchema = mongoose.Schema({
    _id: Number,
    taskTitle: {
      type: String,
      required: [true,"project title is required"],
      lowercase: true,
      unique: true,
      trim: true,
    },
    taskDescription:{
        type: String,
        required: [true,"description is required"],
        lowercase: true,
        trim: true,
    },
  });
assignTaskSchema.plugin(UniqueValidator);
const assignTaskSchemaModel=mongoose.model('assignedTask_collection',assignTaskSchema);
export default assignTaskSchemaModel;
