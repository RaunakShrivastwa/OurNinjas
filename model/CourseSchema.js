import mongoose from "mongoose";
const CourseCategory = ["popular", "livecourse", "self", "fundamental"];
const CourseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }, 
    duration: {
        type: Number,
        required: true
    },
    milestone: {type:Number,required:true},
    description: {
        type: String,
        required: true
    },
    marketPrice:{
        type:String
    },
    sellPrice: {
        type: Number,
        required: true
    },
    student: [{
        type: mongoose.Schema.Types.ObjectId,
        ref :'User'
    }],
    project: [],
    modules:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Module'
    }],
    standred:{
        type:String,
        enum: CourseCategory,
    },
    tag: {
        type: String,
    },
    syllabus:{
        type:String
    },
    introVideo:{
        type:String
    },
    courseImage:{
        type:String
    }
}, {
    timestamps: true
})

const Course = mongoose.model('Course', CourseSchema);
export default Course;