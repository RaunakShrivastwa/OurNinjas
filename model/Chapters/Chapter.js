import mongoose from "mongoose";

const chapterSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    video_url:{
        type:String
    },
    desc:{
        type:String,
        required:true
    },
    moduleName:{
        type:String,
        required:true
    },
    SubTopic:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"SubTopic"
    }]

},{timestamps:true});

const Chapter = mongoose.model("Chapter",chapterSchema);
export default Chapter;