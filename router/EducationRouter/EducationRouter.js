import express from 'express';
import EducationController from '../../controller/EducationController/EducationController.js';
const {addEducation,getAllEducation,deleteEducation} =  new EducationController();

const router = express.Router();
router.post('/add/:userEmail',addEducation);
router.get('/getAll/:userEmail',getAllEducation);
router.get('/delete/:id',deleteEducation);

export default router;