import express from 'express';
import courseRouter from './CourseRouter.js';
import projectRouter from './ProjectRouter.js';
import moduleRouter from './ModuleRouter/moduleRouter.js';
import chapterRouter from './ChapterRouter/chapterRouter.js';
import SubTopicRouter from './SubtopicRouter/SubTopicRouter.js';
import resumeRouter from './ResumeRouter.js';
import userRouter from './userRouter.js';
import bodyParser from 'body-parser';
import Enquire from './EnquiryRouter.js';
import ExprienceRouter from '../router/ExprienceRouter/exprienceRouter.js';
import EducationRouter from './EducationRouter/EducationRouter.js';

const router = express.Router();
router.use(bodyParser.json())
router.use('/user',userRouter);
router.use('/course',courseRouter);
router.use('/project',projectRouter);
router.use('/module',moduleRouter);
router.use('/chapter',chapterRouter);
router.use('/subtopic',SubTopicRouter);
router.use('/resume',resumeRouter);
router.use('/student/enquire',Enquire);
router.use('/exprience',ExprienceRouter);
router.use('/education',EducationRouter);


export default router;