import sequelize from "../db.js";
import DataTypes from "sequelize";

export const TaskData = sequelize.define('task_data', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    img: {
        type: DataTypes.STRING
    },
    theory: {
        type: DataTypes.TEXT
    }
});