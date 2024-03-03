import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Duration: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Guide: {
        type: String
    },
    image: {
        type: String,
        required: true
    },
    Student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Project = mongoose.model('Project',ProjectSchema);
export default Project;