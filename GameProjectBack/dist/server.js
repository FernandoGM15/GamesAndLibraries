"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const GameRouter_1 = __importDefault(require("./routes/GameRouter"));
const LibraryRouter_1 = __importDefault(require("./routes/LibraryRouter"));
const GameLibraryRouter_1 = __importDefault(require("./routes/GameLibraryRouter"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
        this.start();
    }
    config() {
        this.app.set("port", process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use("/api/games", GameRouter_1.default);
        this.app.use("/api/libraries", LibraryRouter_1.default);
        this.app.use("/api/games-libraries", GameLibraryRouter_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor en el puerto', this.app.get('port'));
        });
    }
}
const server = new Server();
//# sourceMappingURL=server.js.map