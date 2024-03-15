import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    userEmail:{
        type:String,
        required:true,
        
    },
    userPassword:{
        type:String,
        required:true,     
        
    },
    userDOB:{
        type:String,
        required:true
        
    },
    avtar:{
      type:String
    },
    userMob:{
        type:Number,
        required:true
        
    },
    userAddress:{
        type:String,
        required:true
        
    },
    userProof:{
        type:String,
        
    },
    userBio:{
        type:String
    },
    userRole:{
       type:String,
       
    },
    enroll:{
        type:String
    },
    courses:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'

    }],
    certification:[],
    skills:[],
    projects:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    }],
    resume:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Resume'
    }],
    referal:{
        
    },
    profile:{
        type:String
    },
},{timestamps:true});

const User = mongoose.model("User",UserSchema);

export default User;

