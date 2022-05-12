"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LibraryController_1 = __importDefault(require("../controllers/LibraryController"));
class LibraryRoute {
    constructor() {
        this.router = (0, express_1.Router)();
        this.router.get("/", LibraryController_1.default.index);
        this.router.get("/:id", LibraryController_1.default.show);
        this.router.post("/", LibraryController_1.default.store);
        this.router.put("/:id", LibraryController_1.default.update);
        this.router.delete("/:id", LibraryController_1.default.delete);
    }
}
exports.default = new LibraryRoute().router;
//# sourceMappingURL=LibraryRouter.js.map