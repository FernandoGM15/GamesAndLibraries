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
const Library_1 = __importDefault(require("../models/Library"));
class LibraryController {
    //INDEX LIBRARY
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const libraries = yield Library_1.default.findAll();
                res.status(200).json(libraries);
            }
            catch (error) {
                res.status(400).json(error);
            }
        });
    }
    //SHOW LIBRARY
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const library = yield Library_1.default.findByPk(req.params.id);
                res.status(200).json(library);
            }
            catch (error) {
                res.status(400);
                res.json(error);
            }
        });
    }
    //STORE GAME
    store(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const library = yield Library_1.default.create(req.body);
                res.status(200).json(library);
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
                const library = yield Library_1.default.findByPk(req.params.id);
                library.update(req.body);
                res.status(200).json(library);
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
                const library = yield Library_1.default.findByPk(req.params.id);
                library.destroy();
                res.status(200).json(library);
            }
            catch (error) {
                res.status(400);
                res.json(error);
            }
        });
    }
}
exports.default = new LibraryController();
//# sourceMappingURL=LibraryController.js.map