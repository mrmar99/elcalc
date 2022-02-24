import {TaskDataInput} from "../models/index.js";

class TaskDataInputControllers {
    getTaskId = async (req) => {
        const params = req.originalUrl
            .split('/data')[0]
            .split('/');
        return params[params.length - 1];
    }

    getData = async (req, res) => {
        const taskId = await this.getTaskId(req);
        const foundTaskDataInput = await TaskDataInput.findAll({ where: { taskDatumId: taskId } });
        res.json(foundTaskDataInput);
    }
}

export default TaskDataInputControllers = new TaskDataInputControllers();