import React from "react";
import {ReactSVG} from "react-svg";
import backButton from "../../assets/svgs/backBtn.svg";
import {getTaskDataInputs} from "../../api";
import {MathComponent} from "mathjax-react";
import calculateScheme from "../../utils/calculators/index.js";

export default class TaskTypeArea extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputs: {},
            result: {}
        };
    }

    async componentDidMount() {
        const {id} = this.props.data;
        const dataInput = await getTaskDataInputs(id);
        const input = dataInput[0];
        Object.entries(input).forEach(([key, value]) => {
            if (value === null) delete input[key];
            delete input["id"];
            delete input["createdAt"];
            delete input["updatedAt"];
            delete input["taskDatumId"];
        });
        Object.entries(input).forEach(([key, value]) => {
            this.setState({
                inputs: {
                    ...this.state.inputs,
                    [key]: {
                        inputName: value,
                        inputValue: ''
                    }
                }
            });
        });
    }

    getDimension = (key) => {
        const dimensions = {
            cutoff_freq: "Частота (Гц)",
            resistor1: "Сопротивление (Ом)",
            resistor2: "Сопротивление (Ом)",
            capacitor1: "Емкость (Ф)",
            capacitor2: "Емкость (Ф)",
            inductor: "Индуктивность (Гн)",
            dc_voltage1: "Пост. напряжение (В)",
            dc_voltage2: "Пост. напряжение (В)",
            ac_voltage1: "Перем. напряжение (В)",
            ac_voltage2: "Перем. напряжение (В)",
            voltage1: "Напряжение (В)",
            bias_voltage: "Напр. смещения (В)",
            amperage1: "Ток (А)",
            transistor_beta1: "Бета транзистора",
            transistor_beta2: "Бета транзистора",
        };
        return dimensions[key];
    }

    handleInput = ({ target }) => {
        const { value, className } = target;
        const re = /^[0-9]*\.?[0-9]*$/;
        if (re.test(value)) {
            this.setState({
                inputs: {
                    ...this.state.inputs,
                    [target.className]: {
                        inputName: this.state.inputs[className].inputName,
                        inputValue: target.value
                    }
                }
            });
        }
    }

    handleCalculate = (e) => {
        e.preventDefault();
        let newInputs = {};
        Object.entries(this.state.inputs).forEach(([key, {inputName}]) => {
            newInputs[key] = {
                inputName: inputName,
                inputValue: ''
            };
        });

        let toCalculate = {};
        Object.entries(this.state.inputs).forEach(([key, {inputValue}]) => {
            toCalculate[key] = parseFloat(inputValue)
        });

        const result = calculateScheme(this.props.data.id, toCalculate);
        console.log(result);
        this.setState({
            inputs: newInputs,
            result: result
        });
    }

    render() {
        const { data, activeTitle, activeArea, taskDataLength } = this.props;
        return (
            <>
                { taskDataLength !== 1 ?
                    <span className={"task-type_title" + activeTitle}>
                        {data.title}
                    </span>
                    : null
                }
                <div className={"task-type_area" + activeArea}>
                    <div className="task-type_calculator">
                        <div className="task-type_img-area">
                            <img src={process.env.REACT_APP_API_URL + '/' + data.img} alt={data.name} />
                        </div>
                        <div className="task-type_calc-area">
                            <span className="calc-area_title">Введите данные</span>
                            <form className="calc-area_form" onSubmit={this.handleCalculate}>
                                <div className="calc-area_inputs">
                                    {
                                        Object.entries(this.state.inputs).map(([key, value]) => {
                                            return (
                                                <label className="input-component" key={key}>
                                                    <span className="input-component_name">
                                                        <MathComponent tex={value.inputName} />
                                                    </span>
                                                    <input
                                                        type="text"
                                                        placeholder={this.getDimension(key)}
                                                        onChange={this.handleInput}
                                                        value={this.state.inputs[key].inputValue}
                                                        className={key}
                                                        required
                                                    />
                                                </label>
                                            )
                                        })
                                    }
                                </div>
                                <div className="input-component_btn">
                                    <button type="submit">Рассчитать</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="accordion_wrapper">
                        <div className="accordion">
                            <span className="accordion_name">Результаты</span>
                            <ReactSVG src={backButton} />
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="accordion_wrapper">
                        <div className="accordion">
                            <span className="accordion_name">Теория</span>
                            <ReactSVG src={backButton} />
                        </div>
                        <div>{data.theory}</div>
                    </div>
                </div>
            </>
        )
    }
}