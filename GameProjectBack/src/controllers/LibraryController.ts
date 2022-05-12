import { Request, Response } from "express";
import Library from "../models/Library";

class LibraryController {
    //INDEX LIBRARY
    public async index(req:Request, res:Response): Promise<void>{
        try {
            const libraries = await Library.findAll();
            res.status(200).json(libraries);
        } catch (error) {
            res.status(400).json(error);
        }
    }

    //SHOW LIBRARY
    public async show(req:Request, res:Response): Promise<void>{
        try {
            const library = await Library.findByPk(req.params.id);
            res.status(200).json(library);
        } catch (error) {
            res.status(400);
            res.json(error);
        }
    }

    //STORE GAME
    public async store(req:Request, res:Response): Promise<void>{
        try{
            const library = await Library.create(req.body);
            res.status(200).json(library);
        } catch(error){
            res.status(400);
            res.json(error);
        }
    }

    //UPDATE GAME
    public async update(req:Request, res:Response): Promise<void>{
        try {
            const library = await Library.findByPk(req.params.id);
            library.update(req.body);
            res.status(200).json(library);
        } catch (error) {
            res.status(400);
            res.json(error);
        }
    }

    //DELETE GAME
    public async delete(req:Request, res:Response): Promise<void>{
        try {
            const library =  await Library.findByPk(req.params.id);
            library.destroy();
            res.status(200).json(library);
        } catch (error) {
            res.status(400);
            res.json(error);
        }
    }
}

export default new LibraryController();