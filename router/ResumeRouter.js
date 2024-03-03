import express  from "express"; 
const router = express.Router();

import ResumeController from "../controller/ResumeController.js";
const resume = new ResumeController();

router.get('/',resume.getAllResume);
router.get('/:id',resume.getResumeByID);
router.post('/addResume',resume.addResume);
router.post('/update/:id',resume.updateResume);
router.delete('/delete/:id',resume.deleteResume);

export default router;