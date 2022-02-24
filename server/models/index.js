import {Subject} from "./Subject.js";
import {Tasks} from "./Tasks.js";
import {TaskData} from "./TaskData.js";
import {TaskDataInput} from "./TaskDataInput.js";

Subject.hasMany(Tasks);
Tasks.belongsTo(Subject);

Tasks.hasMany(TaskData);
TaskData.belongsTo(Tasks);

TaskData.hasOne(TaskDataInput);
TaskDataInput.belongsTo(TaskData);

export { Subject, Tasks, TaskData, TaskDataInput };
