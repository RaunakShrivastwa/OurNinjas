import Chapter from "../../model/Chapters/Chapter.js";
import SubTopic from "../../model/subTopic/SubTopic.js";


export default class SubTopicController{

    addTopic = async (req,res)=>{
        try{
            const chapter = await Chapter.findOne({name:req.body.Chapter});
            if(chapter){
                const topic  = await SubTopic.create(req.body);
                console.log(topic);
                chapter.SubTopic.push(topic);
                chapter.save();
                return res.json(topic)
            }
            return res.json({Error:"Chapter Not Exist"})
        }catch(err){
            return console.log("There is Error While Create SubTopic",err);
        }
    }

    getSubTopic =  async (req,res)=>{
        try{
                return res.json(await SubTopic.find({Chapter:"What is JavaScript?"}))
        }catch(err){
            return console.log("THere us Error ",err);
        }
    }
}