import express from 'express';
import courseRouter from './CourseRouter.js';
import projectRouter from './ProjectRouter.js';
import moduleRouter from './ModuleRouter/moduleRouter.js';
import chapterRouter from './ChapterRouter/chapterRouter.js';
import SubTopicRouter from './SubtopicRouter/SubTopicRouter.js';
import resumeRouter from './ResumeRouter.js';
import userRouter from './userRouter.js';
import bodyParser from 'body-parser';

const router = express.Router();
router.use(bodyParser.json())
router.use('/user',userRouter);
router.use('/course',courseRouter);
router.use('/project',projectRouter);
router.use('/module',moduleRouter);
router.use('/chapter',chapterRouter);
router.use('/subtopic',SubTopicRouter);

router.use('/resume',resumeRouter);


export default router;