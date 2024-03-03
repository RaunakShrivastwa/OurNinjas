import mongoose from "mongoose";

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
    score: {
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
    }]
}, {
    timestamps: true
})

const Course = mongoose.model('Course', CourseSchema);
export default Course;