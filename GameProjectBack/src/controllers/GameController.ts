import { Request, Response } from "express";
import Game from "../models/Game";

class GameController{
    //LIST OF GAMES
    public async index(req:Request, res:Response): Promise<void>{
        try {
            const games = await Game.findAll();
            res.json(games);
        } catch (error) {
            res.status(400);
            res.json(error);
        }
    }

    //SHOW GAME
    public async show(req:Request, res:Response): Promise<void>{
        try {
            const game = await Game.findByPk(req.params.id);
            res.json(game);
        } catch (error) {
            res.status(400);
            res.json(error);
        }
    }

    //STORE GAME
    public async store(req:Request, res:Response): Promise<void>{
        try{
            const game = await Game.create(req.body);
            res.json(game);
        } catch(error){
            res.status(400);
            res.json(error);
        }
    }

    //UPDATE GAME
    public async update(req:Request, res:Response): Promise<void>{
        try {
            const game = await Game.findByPk(req.params.id);
            game.update(req.body);
            res.json(game);
        } catch (error) {
            res.status(400);
            res.json(error);
        }
    }

    //DELETE GAME
    public async delete(req:Request, res:Response): Promise<void>{
        try {
            const game =  await Game.findByPk(req.params.id);
            game.destroy();
            res.json(game);
        } catch (error) {
            res.status(400);
            res.json(error);
        }
    }
}

export default new GameController();