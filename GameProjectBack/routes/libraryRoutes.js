const express = require("express");
const Library = require("./../models/Library");
const router = express.Router()

//INDEX
router.get('/',async (req, res) =>{
    try {
        
        let libraries = await Library.findAll();
        res.json(libraries);
    } catch (error) {
        res.status(400);
        res.json(error);
    }
    
});

//INDEX
router.get('/:id',async (req, res) =>{
    try {
        
        let library = await Library.findByPk(req.params.id);
        res.json(library);
    } catch (error) {
        res.status(400);
        res.json(error);
    }
    
});

//STORE
router.post('/',async(req, res) =>{
    try {
        const library = await  Library.create(req.body);
        res.json(library);
    } catch (error) {
        res.status(400);
        res.json(error);
    }
});

//UPDATE
router.put('/:id',async (req, res) =>{
    try {
        const library = await  Library.findByPk(req.params.id);
        library.update(req.body);
        res.json(library);
    } catch (error) {
        res.status(400);
        res.json(error);
    }
});

//DELETE
router.delete('/:id',async (req, res) =>{
    try {
        const library = await Library.findByPk(req.params.id);
        library.destroy();
        res.json(library);
    } catch (error) {
        res.status(400);
        res.json(error);
    }
});

module.exports = router;