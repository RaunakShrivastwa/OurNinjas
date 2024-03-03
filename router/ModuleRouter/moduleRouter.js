import express from 'express';
import moduleController from '../../controller/ModuleController/moduleController.js';

const {createModule,deleteModule,getAllModules,getSingleModule} =new moduleController();
const router = express();
router.post('/create',createModule)

export default router;