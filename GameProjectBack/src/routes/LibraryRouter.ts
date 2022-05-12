import { Router } from "express";
import LibraryController from "../controllers/LibraryController";

class LibraryRoute{
    router: Router = Router();

    constructor(){
        this.router.get("/", LibraryController.index);
        this.router.get("/:id", LibraryController.show);
        this.router.post("/", LibraryController.store);
        this.router.put("/:id", LibraryController.update);
        this.router.delete("/:id", LibraryController.delete);
    }
}

export default new LibraryRoute().router;