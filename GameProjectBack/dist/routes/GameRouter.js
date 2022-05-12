"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GameController_1 = __importDefault(require("../controllers/GameController"));
class GameRoute {
    constructor() {
        this.router = (0, express_1.Router)();
        this.router.get("/", GameController_1.default.index);
        this.router.get("/:id", GameController_1.default.show);
        this.router.post("/", GameController_1.default.store);
        this.router.put("/:id", GameController_1.default.update);
        this.router.delete("/:id", GameController_1.default.delete);
    }
}
exports.default = new GameRoute().router;
//# sourceMappingURL=GameRouter.js.map