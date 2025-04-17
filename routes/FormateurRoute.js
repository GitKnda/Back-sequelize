const express = require('express'); 
// on importe express 
const router = express.Router(); 
// on declare le router 
const FormateurController = require('../controllers/FormateurControllers'); 
// on importe le controller formateur

router.get("/", (req, res) => { // on declare la route get 
FormateurController.getAllFormateur(req, res); // on declare la fonction getAllFormateur 
});

module.exports = router; 
// on exporte le router