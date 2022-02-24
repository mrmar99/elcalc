import sequelize from "../db.js";
import DataTypes from "sequelize";

export const TaskDataInput = sequelize.define('task_data_input', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cutoff_freq: {
        type: DataTypes.STRING
    },
    resistor1: {
        type: DataTypes.STRING
    },
    resistor2: {
        type: DataTypes.STRING
    },
    capacitor1: {
        type: DataTypes.STRING
    },
    capacitor2: {
        type: DataTypes.STRING
    },
    inductor: {
        type: DataTypes.STRING
    },
    dc_voltage1: {
        type: DataTypes.STRING
    },
    dc_voltage2: {
        type: DataTypes.STRING
    },
    ac_voltage1: {
        type: DataTypes.STRING
    },
    ac_voltage2: {
        type: DataTypes.STRING
    },
    voltage1: {
        type: DataTypes.STRING
    },
    bias_voltage: {
        type: DataTypes.STRING
    },
    amperage1: {
        type: DataTypes.STRING
    },
    transistor_beta1: {
        type: DataTypes.STRING
    },
    transistor_beta2: {
        type: DataTypes.STRING
    }
});