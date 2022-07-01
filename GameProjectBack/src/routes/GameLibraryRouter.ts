import { Router } from "express";
import GameLibraryController  from "../controllers/GameLibraryController";

class GameLibraryRoute {
    router:Router = Router();

    constructor (){
        this.router.get("/", GameLibraryController.index);
        this.router.get("/:id",GameLibraryController.show);
        this.router.post("/", GameLibraryController.store);
        this.router.put("/:id",GameLibraryController.update);
        this.router.delete("/:id",GameLibraryController.delete);
    }
}

export default new GameLibraryRoute().router;