import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    userEmail:{
        type:String,
        required:true,
        unique:true,
        validate: {
            validator: function(v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        }
        
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
        required:true
        
    },
    userBio:{
        type:String
    },
    userRole:{
       type:String,
       required:true
       
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
        
    }   
},{timestamps:true});

const User = mongoose.model("User",UserSchema);

export default User;

