import { axios } from "./axios";

export const getTasks = async (subject) => {
    const res = await axios
        .get("/api/subjects/" + subject + "/tasks")
        .catch((err) => console.log(err));
    return res.data;
};

export const getOneTask = async (id) => {
    const res = await axios
        .get("/api/subjects/all/tasks/" + id)
        .catch((err) => console.log(err));
    return res.data;
};