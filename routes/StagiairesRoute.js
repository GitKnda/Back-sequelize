const express = require('express'); 
// on importe express 
const router = express.Router(); 
// on declare le router 
const StagiaireController = require('../controllers/StagiairesControllers'); 
// on importe le controller stagiaire

router.get("/", (req, res) => { // on declare la route get 
StagiaireController.getAllStagiaires(req, res); // on declare la fonction getAllStagiaires 
});

router.post("/", (req, res) => { 
    StagiaireController.addStagiaires(req, res); 
});

router.get("/:id", (req, res) => { 
    StagiaireController.getStagiairesById(req, res); 
});

module.exports = router; 
// on exporte le router