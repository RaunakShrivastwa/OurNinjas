import Modules from '../../model/Modules/Module.js'
import Course from '../../model/CourseSchema.js';

export default class moduleController{

    createModule = async (req,res)=>{
        try{
            const course = await Course.findOne({name:req.body.enrollCourse});
            if(course){
                const module = await Modules.create(req.body);
                course.modules.push(module);
                course.save();
                return res.json(module);
            }
            return res.json({Error:"Course Not exist"})
        }catch(err){
            return console.log("There is Error while creating Modules",err);
        }
    }

    getAllModules = async (req,res)=>{
         try{
            return res.json(Modules.find({}));
         }catch(err){
            return console.log("There is Error while Fetching All Modules",err);
         }
    }

    getSingleModule = async (req,res)=>{
        try{
             return res.json(Modules.findById(req.params.id))
        }catch(err){
            return console.log("There is Error While Fetching Single Module",err);
        }
    }

    deleteModule = async (req,res)=>{
        try{
            
        }catch(err){
            return console.log("There is Error while Delete Modlue",err);
        }
    }
}