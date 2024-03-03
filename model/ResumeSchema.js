import mongoose from 'mongoose';

const ResumeSchema = new mongoose.Schema({
    resumeName : {
        type: String,
        required: true
    },
    resumeLink : { 
        type: String,
        required: true
    },
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Resume = mongoose.model('Resume',ResumeSchema);
export default Resume;