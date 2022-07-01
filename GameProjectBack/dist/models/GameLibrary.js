"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../database"));
const Game_1 = __importDefault(require("./Game"));
const Library_1 = __importDefault(require("./Library"));
class GameLibrary extends sequelize_1.Model {
}
GameLibrary.init({
    id: {
        type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    gameId: {
        type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
        references: {
            model: Game_1.default,
            key: "id"
        }
    },
    libraryId: {
        type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
        references: {
            model: Library_1.default,
            key: "id"
        }
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize: database_1.default,
    tableName: "game_libraries",
    timestamps: true
});
Game_1.default.hasOne(GameLibrary);
Library_1.default.hasOne(GameLibrary);
exports.default = GameLibrary;
//# sourceMappingURL=GameLibrary.js.map