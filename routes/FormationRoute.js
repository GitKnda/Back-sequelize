const express = require('express'); 
// on importe express 
const router = express.Router(); 
// on declare le router 
const FormationController = require('../controllers/FormationControllers'); 
// on importe le controller formation

router.get("/", (req, res) => { // on declare la route get 
FormationController.getAllFormation(req, res); // on declare la fonction getAllFormation 
});

router.post("/", (req, res) => { 
    FormationController.addFormation(req, res); 
}); 

module.exports = router; 
// on exporte le router