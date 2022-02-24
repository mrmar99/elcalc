import React from "react";
import {getSubjects, getTasks} from "../../api";
import {ReactSVG} from "react-svg";
import CrossSvg from "../../assets/svgs/cross.svg";
import DonateBtn from "../../assets/svgs/donateBtn.svg";
import Subjects from "../../components/Subjects/Subjects";
import './Home.sass';

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: {
                input: "",
            },
            uiState: {
                subjects: [],
                tasks: []
            }
        };
    }

    async componentDidMount() {
        const receivedSubjects = await getSubjects();
        receivedSubjects.map(async (subject) => {
            const receivedTasks = await getTasks(subject.name);
            receivedTasks.forEach((task) => {
                this.setState({ uiState: {
                        subjects: receivedSubjects,
                        tasks: [...this.state.uiState.tasks, task]
                    }
                });
            });
        });
    }

    handleSearch = async ({ target }) => {
        const { value } = target;
        const searchEraser = document.getElementById("search-eraser");
        value ? searchEraser.style.display = "block"
            : searchEraser.style.display = "none";
        this.setState({ search: { input: value } });
    }

    handleEraseSearch = () => {
        const searchInput = document.getElementById("search-input");
        this.setState({ search: { input: '' } });
        document.getElementById("search-eraser").style.display = "none";
        searchInput.value = '';
        searchInput.focus();
    }

    render() {
        const { search } = this.state;
        const { subjects, tasks } = this.state.uiState;

        return (
            <>
                <div className="top-block">
                    <form id="search-form">
                        <input
                            id="search-input"
                            type="text"
                            name="search"
                            placeholder="Поиск схемы..."
                            onChange={this.handleSearch}
                            value={search.value}
                        />
                        <ReactSVG id="search-eraser" src={CrossSvg} onClick={this.handleEraseSearch} />
                    </form>
                    <button className="donate-btn">
                        <span>Донат</span>
                        <ReactSVG src={DonateBtn} />
                    </button>
                </div>
                <Subjects searchValue={search} subjects={subjects} tasks={tasks} />
            </>
        )
    }
}