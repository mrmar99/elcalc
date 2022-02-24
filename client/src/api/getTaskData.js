import { axios } from "./axios";

export const getTaskData = async (taskId) => {
    const res = await axios
        .get("/api/subjects/all/tasks/" + taskId + "/data")
        .catch((err) => console.log(err));
    return res.data;
};
