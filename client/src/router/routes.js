import Home from "../pages/Home/Home";
import Task from "../pages/Task/Task";
import {HOME_ROUTE, TASK_ROUTE} from "../utils/consts";

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: TASK_ROUTE,
        Component: Task
    }
];