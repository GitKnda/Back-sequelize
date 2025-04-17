const FormationService = require('../services/FormationService'); 
// on importe le service formation 
class FormationController { 
// on declare la classe formationController 
    async getAllFormation(req, res) { // on declare la fonction getAllFormation 
        try { // on declare le try  
            const formation = await FormationService.getAllFormation(); 
            // on declare la const formation qui va recuperer tous les formations 
            res.json(formation); 
            // on renvoie les formations au format json 
        } catch (error) { // on declare le catch 
            console.log(error); // on affiche l'erreur dans la console 
            res.status(500); // on declare le status 500 
            res.json({ error: 'Erreur lors de la récupération des formations' }); 
            // on renvoie l'erreur au format json 
        } 
    } 
} 
module.exports = new FormationController(); 
// on exporte la classe formationController