import express from 'express';
import moduleController from '../../controller/ModuleController/moduleController.js';

const {createModule,
    deleteModule,
    getAllModules,
    getSingleModule,
    getSingleModuleById,
    updateModuleById,
    getModuleofTeacher
} =new moduleController();
const router = express();
router.post('/create',createModule);
router.post('/single',getSingleModule);
router.get('/singleMod/:id',getSingleModuleById);
router.post('/update/:id',updateModuleById);
router.get('/getByTeacherId/:id',getModuleofTeacher)



export default router;