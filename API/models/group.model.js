import mongoose from "mongoose";
import UniqueValidator from "mongoose-unique-validator";
const GroupSchema = mongoose.Schema({
    _id: Number,
    gname: {
      type: String,
      required: [true,"Group name is required"],
      lowercase: true,
      unique: true,
      trim: true,
    }
  });
GroupSchema.plugin(UniqueValidator);
const GroupSchemaModel=mongoose.model('group_collection',GroupSchema);
export default GroupSchemaModel;
