import React from 'react';
import {ReactSVG} from "react-svg";
import Tasks from "../Tasks/Tasks";
import "./Subjects.sass";
import filtersSubject from "../../assets/svgs/filtersSubject.svg";
import diodesSubject from "../../assets/svgs/diodesSubject.svg";
import bjtsSubject from "../../assets/svgs/bjtsSubject.svg";
import fetsSubject from "../../assets/svgs/fetsSubject.svg";

const Subject = (props) => {
    const { subject, searchValue, tasks } = props;

    const svgs = {
        "filters": filtersSubject,
        "diodes": diodesSubject,
        "bjts": bjtsSubject,
        "fets": fetsSubject
    };

    return (
        <section className="subject">
            <span className="subject-title">
                <ReactSVG src={svgs[subject.name]} />
                {subject.title}
            </span>
            <Tasks tasks={tasks} searchValue={searchValue} />
        </section>
    )
};

export default class Subjects extends React.Component {
    static Subject = Subject;

    render() {
        // received this.props from parent
        const { searchValue, subjects, tasks } = this.props;

        return (
            <div className="subjects">
                {
                    subjects.map((subject) => {
                        const subjectTasks = tasks.filter((task) => task["subjectId"] === subject.id);
                        return (
                            <Subject
                                subject={subject}
                                tasks={subjectTasks}
                                searchValue={searchValue}
                                key={"subject_" + subject.id}
                            />
                        )
                    })
                }
            </div>
        )
    }
}