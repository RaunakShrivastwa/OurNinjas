import mongoose from "mongoose";

const ModuleSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    desc:{type:String,required:true},
    deadLine:{type:String},
    chapter:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Chapter'
    }],
    mentor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    milestone:{type:Number},
    enrollCourse:{type:String,required:true}
},{timestamps:true});

const Modules = mongoose.model("Module",ModuleSchema);
export default Modules;