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
async updateStagiaires(id, stagiaires) { // on declare la fonction updatestagiaires 
    return await Stagiaires.update(stagiaires, { where: { id_stagiaires: id } }); // on renvoie la stagiaires mise à jour 
}
async deleteStagiaires(id) { // on declare la fonction deletestagiaires 
    return await Stagiaires.destroy({ where: { id_stagiaires: id } }); // on renvoie la stagiaires supprimée 
}
} 
module.exports = new StagiaireService(); 
// on exporte le service stagiaire 