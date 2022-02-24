import React from "react";
import {getOneTask, getTaskData} from "../../api";
import {ReactSVG} from "react-svg";
import backButton from "../../assets/svgs/backBtn.svg";
import './Task.sass';
import {Link} from "react-router-dom";
import TaskTypeArea from "../../components/TaskTypeArea/TaskTypeArea";

export default class Task extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTaskType: "",
            uiState: {
                title: "",
                taskData: []
            }
        };
    }

    async componentDidMount() {
        const taskId = this.props.match.params.id;
        const task = await getOneTask(taskId);
        const taskTitle = task[0].title;
        const taskData = await getTaskData(taskId)
        this.setState({
            activeTaskType: taskData[0].name,
            uiState: {
                title: taskTitle,
                taskData: taskData
            }
        })
    }

    handleNavClick = (e) => {
        const btnId = e.currentTarget.id;
        this.setState({
            activeTaskType: btnId
        });
    }

    render() {
        const {activeTaskType} = this.state;
        const {title, taskData} = this.state.uiState;

        return (
            <>
                <div className="task_top">
                    <Link
                        to={`/`}
                        className="back_btn"
                    ><ReactSVG src={backButton} /></Link>
                    <div className="task_title">
                        {title}
                    </div>
                </div>
                <div className="task-type_nav">
                    {taskData.map(({name}) =>
                        taskData.length !== 1 ?
                            ( name === activeTaskType ?
                                <ReactSVG
                                    key={"taskNavBtn_" + name}
                                    className="nav_btn active-nav_btn"
                                    id={name}
                                    src={process.env.REACT_APP_API_URL + '/' + name + ".svg"}
                                /> :
                                <ReactSVG
                                    key={"taskNavBtn_" + name}
                                    className="nav_btn"
                                    id={name}
                                    src={process.env.REACT_APP_API_URL + '/' + name + ".svg"}
                                    onClick={this.handleNavClick}
                                />
                            )
                            : null
                    )}
                </div>
                { taskData.map((data) => {
                    return (
                        data.name === activeTaskType ?
                            <TaskTypeArea
                                key={"taskType_" + data.name}
                                data={data}
                                activeTitle={" task-type_title_active"}
                                activeArea={" task-type_area_active"}
                                taskDataLength={taskData.length}
                            /> :
                            <TaskTypeArea
                                key={"taskType_" + data.name}
                                data={data}
                                activeTitle=""
                                activeArea=""
                                taskDataLength={taskData.length}
                            />
                    )
                }) }
            </>
        )
    }
}