import React from 'react';
import {Link} from "react-router-dom";

export default class Tasks extends React.Component {
    render() {
        const { tasks, searchValue } = this.props;

        return (
            <div className="tasks">
                {
                    tasks
                        .filter((task) => task.title.toLowerCase().includes(searchValue.input.toLowerCase()))
                        .map((task) => {
                            return (
                                <Link
                                    to={`/tasks/${task.id}`}
                                    className="task"
                                    key={'task_' + task.id}
                                >{task.title}</Link>
                            )})
                }
            </div>
        )
    }
}