import express from 'express';
import ExprienceController from '../../controller/ExprienceController/ExprienceController.js';

const {addExprience,getAllExprience,deleteExprience} = new ExprienceController();

const router = express.Router();
router.post('/add/:userEmail',addExprience);
router.get('/getAll/:userEmail',getAllExprience);
router.get('/delete/:id',deleteExprience);

export default router;