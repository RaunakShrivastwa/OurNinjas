import Enquire from "../model/Enquiry.js";

export default class EnquireController{
    addEnquiry = async (req,res)=>{
        try{
            const exist = await Enquire.findOne({email:req.body.email});
            if(exist){
                return res.status(401).json({Message:'Your  Enquiry Already Added here'})
            }
            return res.status(201).json(await Enquire.create(req.body))

        }catch(err){
            return console.log("There is Error While post data",err);
        }
    }

    getAllEnquire = async (req,res)=>{

    }
}