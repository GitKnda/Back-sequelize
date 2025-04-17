const FormateurService = require('../services/FormateurService'); 
// on importe le service formateur 
class FormateurController { 
// on declare la classe formateurController 
    async getAllFormateur(req, res) { // on declare la fonction getAllFormateur 
        try { // on declare le try  
            const formateur = await FormateurService.getAllFormateur(); 
            // on declare la const formateur qui va recuperer tous les formateurs 
            res.json(formateur); 
            // on renvoie les formateurs au format json 
        } catch (error) { // on declare le catch 
            console.log(error); // on affiche l'erreur dans la console 
            res.status(500); // on declare le status 500 
            res.json({ error: 'Erreur lors de la récupération des formateurs' }); 
            // on renvoie l'erreur au format json 
        } 
    } 
} 
module.exports = new FormateurController(); 
// on exporte la classe formateurController