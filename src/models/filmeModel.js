import { DataTypes } from "sequelize";
import sequelize from "../config/dbConfig.js";

const filmeModel = sequelize.define('Filmes', {

    id: {
        type:DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false
    },
    titulo: {
        type: DataTypes.STRING,
        aloowNull: false
    },
    diretor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ano: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    genero: {
        type:DataTypes.STRING,
        aloowNull:false
    }
}, {
    timestamps:false,
});

export default filmeModel;