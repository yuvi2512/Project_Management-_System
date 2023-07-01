import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();

import UserRouter from './route/user.router.js';
import projectRouter from './route/project.router.js';
import groupRouter from './route/group.router.js';
import assignRouter from './route/assign_project.router.js'
import assign_taskRouter from './route/assigned_task.router.js'
import taskSubmission from './route/task_submission.router.js'

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


//middleware
app.use('/user',UserRouter);
app.use('/project',projectRouter);
app.use('/group',groupRouter);
app.use('/assign_project',assignRouter);
app.use('/assign_task',assign_taskRouter); 
app.use('/taskSubmission',taskSubmission);


app.listen(3001);
console.log("server invoked at link http://localhost:3001");