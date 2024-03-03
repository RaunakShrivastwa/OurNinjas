import express from 'express';
import SubTopicController from '../../controller/SubTopicController/SubTopicController.js';

const {addTopic} = new SubTopicController();
const router = express.Router();
router.post('/create',addTopic);

export default router;