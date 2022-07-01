import { Request, Response } from "express";
import GameLibrary from "../models/GameLibrary";
import Game from "../models/Game";

class GameLibraryController {
    /**
     * Index
     */
    public async index(req: Request, res: Response): Promise<void> {
        try {
            const gameLibraries = await GameLibrary.findAll();
            res.json(gameLibraries)
        } catch (error) {
            res.status(400);
            res.json(error);
        }
    }

    /**
     * Show
     */
    public async show(req: Request, res: Response) {
        try {
            const gameLibraries = await GameLibrary.findByPk(req.params.id);
            res.json(gameLibraries);
        } catch (error) {
            res.status(400);
            res.json(error);
        }
    }

    //STORE GAME
    public async store(req: Request, res: Response): Promise<void> {
        try {
            const {gameId, libraries} = req.body;
            let gameLibrary = await GameLibrary.create(req.body);
            res.json(gameLibrary);
        } catch (error) {
            res.status(400);
            res.json(error);
        }
    }

    //UPDATE GAME
    public async update(req:Request, res:Response): Promise<void>{
        try {
            const gameLibrary = await GameLibrary.findByPk(req.params.id);
            gameLibrary.update(req.body);
            res.json(gameLibrary);
        } catch (error) {
            res.status(400);
            res.json(error);
        }
    }

    //DELETE GAME
    public async delete(req:Request, res:Response): Promise<void>{
        try {
            const gameLibrary =  await GameLibrary.findByPk(req.params.id);
            gameLibrary.destroy();
            res.json(gameLibrary);
        } catch (error) {
            res.status(400);
            res.json(error);
        }
    }
}

export default new GameLibraryController();