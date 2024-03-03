import Modules from "../../model/Modules/Module.js";
import Chapter from "../../model/Chapters/Chapter.js";

export default class ChapterController{

    createChapter = async(req,res)=>{
        try{
            const module = await Modules.findOne({name:req.body.moduleName});   
            console.log(module);       
            if(module){
                // req.body.moduleName = module;
                const chapter = await Chapter.create(req.body);                        
                module.chapter.push(chapter);
                module.save();            
                return res.json(chapter); 
            }return res.json({Error:`Module Not Exist`});
        }catch(err){
            return console.log("There is Error While Creating Chapter",err);
        }
    }
}
