import {TaskData} from "../models/index.js";

class TaskDataControllers {
    getTaskId = async (req) => {
        const params = req.originalUrl
            .split('/');
        return params[params.length - 2];
    }

    getData = async (req, res) => {
        const taskId = await this.getTaskId(req);
        const foundTaskData = await TaskData.findAll({ where: { taskId: taskId } });
        res.json(foundTaskData);
    }
}

export default TaskDataControllers = new TaskDataControllers();