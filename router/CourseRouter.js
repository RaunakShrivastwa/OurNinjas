import express from 'express';
const router = express.Router();
import CourseController from '../controller/CourseController.js';
const course = new CourseController();

router.get('/',course.getAllCourse);
router.get('/:courseName',course.getCourseByName);
router.post('/create',course.createCourse);
router.post('/updateCourse/:name',course.updateCourse);
router.get('/deleteCourse/:name',course.deleteCourse);

export default router;