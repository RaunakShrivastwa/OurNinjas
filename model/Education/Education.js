import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
    collegeName:{
        type:String
    },
    course:{
        type:String
    },
    grade:{
        type:String
    },
    startYear:{
        type:Number
    },
    endYear:{
        type:Number
    },
    user:{
        type:String
    }
},{timestamps:true});

const Education  = mongoose.model("Education",educationSchema);
export default Education;