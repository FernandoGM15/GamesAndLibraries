import { InferAttributes, InferCreationAttributes, CreationOptional, Model, DataTypes, Deferrable } from "sequelize";
import sequelize from "../database";
import Game from "./Game";
import Library from "./Library";

class GameLibrary extends Model<InferAttributes<GameLibrary>, InferCreationAttributes<GameLibrary>> {
    declare id: CreationOptional<number>;
    // declare gameId: CreationOptional<number>;
    // declare libraryId: CreationOptional<number>;
    declare description: string;
}

GameLibrary.init({
        id:{
            type:DataTypes.BIGINT.UNSIGNED,
            primaryKey:true,
            autoIncrement:true
        },
        description:{
            type:DataTypes.STRING,
            allowNull:true
        }
},{
    sequelize,
    tableName:"game_libraries",
    timestamps:true
});

Game.belongsTo(GameLibrary);


export default GameLibrary;