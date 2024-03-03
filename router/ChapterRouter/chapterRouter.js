import express from 'express';
import ChapterController from '../../controller/ChapterController/chapterController.js';
const {createChapter}= new ChapterController();

const router = express.Router();
router.post("/create",createChapter)

export default router;