import { axios } from "./axios";

export const getSubjects = async () => {
    const res = await axios
        .get("/api/subjects")
        .catch((err) => console.log(err));
    return res.data;
};