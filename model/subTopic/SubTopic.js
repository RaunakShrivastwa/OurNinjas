import mongoose from "mongoose";

const SubTopicSchema = new mongoose.Schema({
    TopicName:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    Chapter:{
        type:String,
        required:true
    },
    video_URL:{
        type:String,
        required:true
    }
},{timestamps:true});

const SubTopic = mongoose.model("SubTopic",SubTopicSchema);

export default SubTopic;