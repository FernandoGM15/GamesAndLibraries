"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const keys_1 = __importDefault(require("./keys"));
const sequelize = new sequelize_1.Sequelize(keys_1.default.DB, keys_1.default.USER, keys_1.default.PASSWORD, {
    host: keys_1.default.HOST,
    dialect: "mysql",
    timezone: '-05:00',
});
exports.default = sequelize;
//# sourceMappingURL=database.js.map