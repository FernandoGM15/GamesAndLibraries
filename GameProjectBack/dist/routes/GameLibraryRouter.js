"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GameLibraryController_1 = __importDefault(require("../controllers/GameLibraryController"));
class GameLibraryRoute {
    constructor() {
        this.router = (0, express_1.Router)();
        this.router.get("/", GameLibraryController_1.default.index);
        this.router.get("/:id", GameLibraryController_1.default.show);
        this.router.post("/", GameLibraryController_1.default.store);
        this.router.put("/:id", GameLibraryController_1.default.update);
        this.router.delete("/:id", GameLibraryController_1.default.delete);
    }
}
exports.default = new GameLibraryRoute().router;
//# sourceMappingURL=GameLibraryRouter.js.map