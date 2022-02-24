import Express from 'express';
import SubjectsControllers from "../controllers/subjects.controllers.js";
const router = Express.Router();

router.get('/', SubjectsControllers.getAll);

export default router;