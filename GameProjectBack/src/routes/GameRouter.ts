import { Router } from "express";
import GameController from "../controllers/GameController";

class GameRoute {
    router: Router = Router();

    constructor(){
        this.router.get("/", GameController.index);
        this.router.get("/:id", GameController.show);
        this.router.post("/", GameController.store);
        this.router.put("/:id", GameController.update);
        this.router.delete("/:id",GameController.delete);
    }
}

export default new GameRoute().router;