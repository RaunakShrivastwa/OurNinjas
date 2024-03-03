import express from 'express';
import userController from '../controller/userController.js';


const user = new userController();

const router = express.Router();
router.post('/add',user.addUser);
router.post('/varify',user.varifyUser);
router.post('/resend',user.resend)
router.get('/getAll',user.getAllUser);
router.get('/delete/:userEmail',user.deleteUser);
router.post('/update/:userEmail',user.updateUser);
router.get('/fetchUser/:userEmail',user.fetchSingleUser);
router.post('/course/assign',user.AssignCourse);
router.get('/allDetals/Information',user.getAllDetails);


export default router;