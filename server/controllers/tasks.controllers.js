import ApiError from "../error/ApiError.js";
import {Subject, Tasks} from "../models/index.js";

class TasksControllers {
    getSubjectId = async (req) => {
        const params = req.originalUrl
            .split('/tasks')[0]
            .split('/');
        const subject = params[params.length - 1];
        const foundSubject = await Subject.findOne({ where: { name: subject } });
        return foundSubject.id;
    }

    getAll = async (req, res) => {
        const tasks = await Tasks.findAll();
        res.json(tasks);
    }

    getBySubject = async (req, res) => {
        const subjectId = await this.getSubjectId(req);
        const tasks = await Tasks.findAll({ where: { subjectId: subjectId } });
        res.json(tasks);
    }

    getOne = async (req, res, next) => {
        const { id } = req.params;
        const task = await Tasks.findAll({ where: { id: id } });
        if (!task.length) {
            return next(ApiError.notFound('Задача не найдена'));
        }
        res.json(task);
    }
}

export default TasksControllers = new TasksControllers();