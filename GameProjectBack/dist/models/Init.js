"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Game_1 = __importDefault(require("./Game"));
const Library_1 = __importDefault(require("./Library"));
const GameLibrary_1 = __importDefault(require("./GameLibrary"));
const dbInit = () => {
    Game_1.default.sync();
    Library_1.default.sync();
    GameLibrary_1.default.sync();
};
dbInit();
//# sourceMappingURL=Init.js.map