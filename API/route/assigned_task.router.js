import express from 'express';
const router =express.Router();
import * as AssignController from '../controller/assign_task.controller.js'

router.post('/save',AssignController.save);

router.get('/fetch',AssignController.fetch);

router.delete('/delete',AssignController.deleteAssign_task);

router.patch('/update',AssignController.updateAssign_task);

export default router;
