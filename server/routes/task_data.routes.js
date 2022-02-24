import Express from 'express';
import TaskDataControllers from "../controllers/task_data.controllers.js";
const router = Express.Router();

router.get('/data', TaskDataControllers.getData);

export default router;
