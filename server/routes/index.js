import {Router} from "express";
import subjectsRouter from "./subjects.routes.js";
import tasksRouter from "./tasks.routes.js";
import taskDataRouter from "./task_data.routes.js";
import taskDataInputRouter from "./task_data_inputs.routes.js";

const router = new Router();

router.use('/subjects', subjectsRouter);
router.use('/subjects/:subject/tasks', tasksRouter);
router.use('/subjects/:subject/tasks/:id', taskDataRouter);
router.use('/subjects/:subject/tasks/:id/data', taskDataInputRouter);

export default router;