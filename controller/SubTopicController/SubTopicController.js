import Chapter from "../../model/Chapters/Chapter.js";
import SubTopic from "../../model/subTopic/SubTopic.js";
import Modules from "../../model/Modules/Module.js";


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
        // console.log(req.params.name);
        try{
                 const chapter = await  Chapter.find({name:req.params.name});
                 const module = await Modules.findOne({name:chapter[0].moduleName}).populate('mentor')
                 const subTopic = await SubTopic.find({Chapter:chapter[0].name})
                return res.json({subTopic:subTopic,Mentor:module})
        }catch(err){
            return console.log("THere us Error ",err);
        }
    }

    getTopicNow = async (req,res)=>{
        try{
            const topic  = await SubTopic.find({TopicName:req.params.name});
            return res.json(topic)
        }catch(err){
            return console.log("There is Error ",err);
        }
    }

    updateTopic = async (req, res) => {
        console.log(req.body);
        try {
            const updateTopic = await SubTopic.findByIdAndUpdate(req.params.id, {
                $set: {
                    TopicName: req.body.TopicName,
                    desc: req.body.desc,
                    Chapter:req.body.chapter,
                    video_URL:req.body.video_URL
                }
            })
            return res.json(updateTopic);
        } catch (err) {
            return console.log("There is Error While Updating Chapter", err);
        }
    }
}