const { } = require("sequelize"); 
// on importe sequelize 
const Formateur = require('../models/formateur'); 
// on importe le model formateur 
class FormateurService { 
async getAllFormateur() { // on declare la fonction getAllFormateur 
return await Formateur.findAll(); // on renvoie tous les formateur 
} 
} 
module.exports = new FormateurService(); 
// on exporte le service formateur 