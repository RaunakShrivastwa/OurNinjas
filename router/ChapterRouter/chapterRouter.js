import express from 'express';
import ChapterController from '../../controller/ChapterController/chapterController.js';
const {createChapter,showChapterById,updateChapter}= new ChapterController();

const router = express.Router();
router.post("/create",createChapter);
router.get("/getChapter/:id", showChapterById);
router.post("/updateCourse/:id", updateChapter);

export default router;