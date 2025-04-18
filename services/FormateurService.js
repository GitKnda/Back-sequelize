const { } = require("sequelize"); 
// on importe sequelize 
const Formateur = require('../models/formateur'); 
// on importe le model formateur 
class FormateurService { 
async getAllFormateur() { // on declare la fonction getAllFormateur 
return await Formateur.findAll(); // on renvoie tous les formateur 
}
async addFormateur(formateur) { // on declare la fonction addFormation 
    return await Formateur.create(formateur); // on renvoie la formation 
}
async getFormateurById(id) { // on declare la fonction getFormationById 
    return await Formateur.findByPk(id); // on renvoie la formation par son id 
}
async updateFormateur(id, formateur) { // on declare la fonction updateFormation 
    return await Formateur.update(formateur, { where: { id_formateur: id } }); // on renvoie la formation mise à jour 
}
async deleteFormateur(id) { // on declare la fonction deleteFormation 
    return await Formateur.destroy({ where: { id_formateur: id } }); // on renvoie la formation supprimée 
}
} 
module.exports = new FormateurService(); 
// on exporte le service formateur 