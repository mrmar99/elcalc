import Express from 'express';
import TaskDataInputControllers from "../controllers/task_data_inputs.controllers.js";
const router = Express.Router();

router.get('/inputs', TaskDataInputControllers.getData);

export default router;
