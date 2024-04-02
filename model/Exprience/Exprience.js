import mongoose from "mongoose";

const exprienceSchema = new mongoose.Schema({
    name:{
        type:String
    },
    role:{
        type:String
    },
    join_year:{
        type:String
    },
    end_year:{
        type:String
    },
    summry:{
        type:String
    },
    user:{
       type:String
    }
},{timestamps:true});

const Exprience = mongoose.model("Exprience",exprienceSchema);

export default Exprience;