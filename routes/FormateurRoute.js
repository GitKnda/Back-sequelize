const express = require('express'); 
// on importe express 
const router = express.Router(); 
// on declare le router 
const FormateurController = require('../controllers/FormateurControllers'); 
// on importe le controller formateur

router.get("/", (req, res) => { // on declare la route get 
FormateurController.getAllFormateur(req, res); // on declare la fonction getAllFormateur 
});

router.post("/", (req, res) => { 
    FormateurController.addFormateur(req, res); 
});

router.get("/:id", (req, res) => { 
    FormateurController.getFormateurById(req, res); 
});

module.exports = router; 
// on exporte le router