import mongoose from "mongoose";

const EnquireSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    }
});

const Enquire = mongoose.model("Enquiry",EnquireSchema);

export default Enquire;