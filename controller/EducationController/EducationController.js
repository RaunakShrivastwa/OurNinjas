import User from "../../model/User.js";
import Education from "../../model/Education/Education.js";

export default class EducationController{

    // for the add education
    addEducation = async (req,res)=>{
        console.log("body",req.body);
        console.log(req.params.userEmail);
       try{

            const user = await User.findOne({userEmail:req.params.userEmail});
            if(!user){
                return res.status(401).json({Error:'User Does not exist'})
            }

            return res.status(201).json(await Education.create(req.body));
       }
       catch(err){
          return console.log("There is Error ",err);
       }
    }

    // get All Education
    getAllEducation  = async (req,res)=>{
        try{
             return res.json(await Education.find({user:req.params.userEmail}));
        }catch(err){
            return console.log("THere is Error ",err);
        }
    }

    deleteEducation = async (req,res)=>{
       try{
            return res.json(await Education.findByIdAndDelete(req.params.id))
       }catch(err){
        return console.log("THere is Errir ",err);
       }
    }
}