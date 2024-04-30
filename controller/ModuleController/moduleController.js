import Modules from '../../model/Modules/Module.js'
import Course from '../../model/CourseSchema.js';

export default class moduleController{

    createModule = async (req,res)=>{
        try{
            const course = await Course.findOne({name:req.body.enrollCourse});
            if(course){
                console.log(req.body);
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
        console.log(req.body);
        try{
             return res.json(await Modules.findOne(
                {
                    enrollCourse:req.body.enrollCourse,
                    milestone:req.body.milestone
                }).populate('chapter'))
        }catch(err){
            return console.log("There is Error While Fetching Single Module xxxx",err);
        }
    }

    getSingleModuleById = async (req,res)=>{
        try{ 
            if(req.params.id){
               return res.json(await Modules.findById(req.params.id).populate('mentor').populate('chapter'))
           }
           return;
        }catch(err){
            return console.log("There is Error While Fetching Single Module ccccccccc",err);
        }
    }

    updateModuleById = async (req, res) => {
        try {
            const updateCourse = await Modules.findByIdAndUpdate(req.params.id, {
                $set: {
                    name: req.body.name,
                    desc: req.body.desc,
                    mentor:req.body.mentor,
                    pdf: req.body.pdf
                }
            })
            console.log(updateCourse);
            return res.json(updateCourse);
        } catch (err) {
            return console.log("There isn error durning update the module");
        }
    }


    deleteModule = async (req,res)=>{
        try{
            
        }catch(err){
            return console.log("There is Error while Delete Modlue",err);
        }
    }

    getModuleofTeacher = async (req,res)=>{
        try{
             const modules = await Modules.find({mentor:req.params.id});
             return res.json(modules)
        }catch(err){
            return console.log("There is Error ",err);
        }
    }
}