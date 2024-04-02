import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    userName:{
        type:String,
    },
    userEmail:{
        type:String,
        
    },
    userPassword:{
        type:String,    
        
    },
    userDOB:{
        type:String,
        
    },
    avtar:{
      type:String
    },
    userMob:{
        type:Number,
        
    },
    userAddress:{
        type:String,
        
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
    status:{
        type:String
    },
    startDate:{
        type:String
    }
},{timestamps:true});

const User = mongoose.model("User",UserSchema);

export default User;

