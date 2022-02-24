import { axios } from "./axios";

export const getTaskDataInputs = async (taskDataId) => {
    const res = await axios
        .get("/api/subjects/all/tasks/" + taskDataId + "/data/inputs")
        .catch((err) => console.log(err));
    return res.data;
};
