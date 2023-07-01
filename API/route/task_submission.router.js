import express from 'express';
const router=express.Router();
import * as taskSubmissionController from '../controller/task_submission.controller.js'

router.post('/save',taskSubmissionController.save);

router.get ('/fetch',taskSubmissionController.fetch);

router.delete('/delete',taskSubmissionController.deletetask_Submission);

router.patch('/update',taskSubmissionController.updatetask_Submission);

export default router;