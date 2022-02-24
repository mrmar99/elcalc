import Express from 'express';
import TasksControllers from "../controllers/tasks.controllers.js";

const router = Express.Router();

router.get('/', TasksControllers.getBySubject);
router.get('/:id', TasksControllers.getOne);

export default router;