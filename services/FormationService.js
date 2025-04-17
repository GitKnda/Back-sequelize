const { } = require("sequelize"); 
// on importe sequelize 
const Formation = require('../models/formation'); 
// on importe le model formation 
class FormationService { 
async getAllFormation() { // on declare la fonction getAllFormation 
return await Formation.findAll(); // on renvoie tous les formation 
}
async addFormation(formation) { // on declare la fonction addFormation 
    return await Formation.create(formation); // on renvoie la formation 
}
}

module.exports = new FormationService(); 
// on exporte le service formation 