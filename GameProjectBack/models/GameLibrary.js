const { DataTypes, Deferrable  } = require("sequelize");
const sequelize = require("./../config/db-config");
const Game = require("./Game");
const Library = require("./Library.js");

const GameLibrary = sequelize.define("GameLibrary",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:true
    },
    game_id:{
        type:DataTypes.INTEGER,
        references: {
            model:Game,
            key:"id",
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
    },
    library_id:{
        type:DataTypes.INTEGER,
        references:{
            model:Library,
            key:"id",
            deferrable:Deferrable.INITIALLY_IMMEDIATE
        }
    }
},
{
    tableName:"games_libraries"
})

module.expors = GameLibrary;
