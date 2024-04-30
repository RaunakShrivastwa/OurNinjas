import express from 'express';
import SubTopicController from '../../controller/SubTopicController/SubTopicController.js';

const {addTopic,getSubTopic,updateTopic,getTopicNow} = new SubTopicController();
const router = express.Router();
router.post('/create',addTopic);
router.get('/getSingle/:name',getSubTopic);
router.post('/update/:id',updateTopic);
router.get('/get/topic/:name',getTopicNow)

export default router;