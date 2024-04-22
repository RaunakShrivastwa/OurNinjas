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

    updateChapter = async (req, res) => {
        try {
            const updateChapter = await Chapter.findByIdAndUpdate(req.params.id, {
                $set: {
                    name: req.body.name,
                    desc: req.body.desc
                }
            })
            return res.json(updateChapter);
        } catch (err) {
            return console.log("There is Error While Updating Chapter", err);
        }
    }

    showChapterById = async (req, res) => {
        try {
             if(req.params.id){
                const getChapter = await Chapter.findById(req.params.id).populate('SubTopic');
               return res.json(getChapter);
             }
        } catch (error) {
            return console.log("There is Error While getting Chapter ID", error);
        }
    }


}
