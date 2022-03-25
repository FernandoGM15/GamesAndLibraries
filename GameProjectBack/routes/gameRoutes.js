const express = require("express");
const Game = require("./../models/Game");
const router = express.Router()

//INDEX
router.get('/',async (req, res) =>{
    try {
        
        let games = await Game.findAll();
        res.json(games);
    } catch (error) {
        res.status(400);
        res.json(error);
    }
    
});

//INDEX
router.get('/:id',async (req, res) =>{
    try {
        
        let game = await Game.findByPk(req.params.id);
        res.json(game);
    } catch (error) {
        res.status(400);
        res.json(error);
    }
    
});

//STORE
router.post('/',async(req, res) =>{
    try {
        const game = await  Game.create(req.body);
        res.json(game);
    } catch (error) {
        res.status(400);
        res.json(error);
    }
});

//UPDATE
router.put('/:id',async (req, res) =>{
    try {
        const game = await  Game.findByPk(req.params.id);
        game.update(req.body);
        res.json(game);
    } catch (error) {
        res.status(400);
        res.json(error);
    }
});

//DELETE
router.delete('/:id',async (req, res) =>{
    try {
        const game = await Game.findByPk(req.params.id);
        game.destroy();
        res.json(game);
    } catch (error) {
        res.status(400);
        res.json(error);
    }
});

module.exports = router;