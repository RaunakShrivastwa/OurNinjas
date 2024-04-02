import express from 'express';
import SubTopicController from '../../controller/SubTopicController/SubTopicController.js';

const {addTopic,getSubTopic} = new SubTopicController();
const router = express.Router();
router.post('/create',addTopic);
router.get('/getSingle/:name',getSubTopic)

export default router;