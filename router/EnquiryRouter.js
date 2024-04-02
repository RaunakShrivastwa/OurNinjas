import express from 'express';
import EnquireController from '../controller/EnquiryController.js';

const {addEnquiry,getAllEnquire} = new EnquireController();

const router = express.Router();
console.log("worlkoing");

router.post('/add',addEnquiry)

export default router;