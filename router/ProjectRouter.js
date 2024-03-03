import express from 'express';
const router = express.Router();

import ProjectController from '../controller/ProjectController.js';
const project = new ProjectController();

router.get('/',project.getAllProject);
router.get('/:id',project.getProjectByUser);
router.post('/create',project.createProject);
router.post('/update/:id',project.updateProject);
router.delete('/delete/:id',project.deleteProject);

export default router;