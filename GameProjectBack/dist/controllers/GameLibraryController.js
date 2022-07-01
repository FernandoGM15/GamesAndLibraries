"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GameLibrary_1 = __importDefault(require("../models/GameLibrary"));
const Game_1 = __importDefault(require("../models/Game"));
class GameLibraryController {
    /**
     * Index
     */
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const gameLibraries = yield GameLibrary_1.default.findAll({
                    include: Game_1.default
                });
                res.json(gameLibraries);
            }
            catch (error) {
                res.status(400);
                res.json(error);
            }
        });
    }
    /**
     * Show
     */
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const gameLibraries = yield GameLibrary_1.default.findByPk(req.params.id);
                res.json(gameLibraries);
            }
            catch (error) {
            }
        });
    }
    //STORE GAME
    store(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { gameId, libraries } = req.body;
                for (let library of libraries) {
                    yield GameLibrary_1.default.create({
                        "gameId": gameId,
                        "libraryId": library
                    });
                }
                res.json("added");
            }
            catch (error) {
                res.status(400);
                res.json(error);
            }
        });
    }
    //UPDATE GAME
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const gameLibrary = yield GameLibrary_1.default.findByPk(req.params.id);
                gameLibrary.update(req.body);
                res.json(gameLibrary);
            }
            catch (error) {
                res.status(400);
                res.json(error);
            }
        });
    }
    //DELETE GAME
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const gameLibrary = yield GameLibrary_1.default.findByPk(req.params.id);
                gameLibrary.destroy();
                res.json(gameLibrary);
            }
            catch (error) {
                res.status(400);
                res.json(error);
            }
        });
    }
}
exports.default = new GameLibraryController();
//# sourceMappingURL=GameLibraryController.js.map