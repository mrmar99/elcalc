import {Subject} from "../models/index.js";

class SubjectsControllers {
    getAll = async (req, res) => {
        const subject = await Subject.findAll();
        res.json(subject);
    }
}

export default SubjectsControllers = new SubjectsControllers();