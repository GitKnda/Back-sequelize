const { } = require("sequelize"); 
// on importe sequelize 
const Stagiaires = require('../models/stagiaires'); 
// on importe le model stagiaires 
class StagiaireService { 
async getAllStagiaires() { // on declare la fonction getAllStagiaires 
return await Stagiaires.findAll(); // on renvoie tous les stagiaires 
}
async addStagiaires(stagiaires) { // on declare la fonction addFormation 
    return await Stagiaires.create(stagiaires); // on renvoie la formation 
}
async getStagiairesById(id) { // on declare la fonction getFormationById 
    return await Stagiaires.findByPk(id); // on renvoie la formation par son id 
}
} 
module.exports = new StagiaireService(); 
// on exporte le service stagiaire 