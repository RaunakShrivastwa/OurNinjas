import express from 'express';
const router = express.Router();
import CourseController from '../controller/CourseController.js';
const course = new CourseController();

router.get('/',course.getAllCourse);
router.get('/courseName/:courseName',course.getCourseByName);
router.post('/create',course.createCourse);
router.post('/updateCourse/:name',course.updateCourse);
router.get('/deleteCourse/:name',course.deleteCourse);
router.get('/status',course.getUpcomingCourse);

export default router;