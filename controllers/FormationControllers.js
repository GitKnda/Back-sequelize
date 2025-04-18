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
    async addFormation(req, res) { // on declare la fonction addFormation 
        try { // on declare le try 
            const formation = await
                FormationService.addFormation(req.body);
            // on declare la const formation qui va recuperer la formation 
            res.status(201).json(formation);
            // on renvoie la formation au format json 
        } catch (error) { // on declare le catch 
            console.log(error); // on affiche l'erreur dans la 
            console
            res.status(500); // on declare le status 500 
            res.json({ error: 'Erreur lors de l\'ajout de la formation' });
            // on renvoie l'erreur au format json 
        }
    }
    async getFormationById(req, res) { // on declare la fonction getFormationById 
        try { // on declare le try 
            const formation = await FormationService.getFormationById(req.params.id);
            // on declare la const formation qui va recuperer la formation par son id 
            if (!formation) { // si la formation n'existe pas 
                return res.status(404).json({ error: 'Formation non trouvée' });
                // on renvoie l'erreur au format json 
            }
            res.json(formation);
            // on renvoie la formation au format json 
        } catch (error) { // on declare le catch 
            console.log(error); // on affiche l'erreur dans la console 
            res.status(500); // on declare le status 500 
            res.json({ error: 'Erreur lors de la récupération de la formation' });
            // on renvoie l'erreur au format json 
        }
    }
    async updateFormation(req, res) { // on declare la fonction updateFormation 
        try { // on declare le try 
            const formation = await FormationService.updateFormation(req.params.id, req.body);
            // on declare la const formation qui va recuperer la formation par son id 
            if (!formation) { // si la formation n'existe pas 
                return res.status(404).json({ error: 'Formation non trouvée' });
                // on renvoie l'erreur au format json 
            }
            res.json(formation);
            // on renvoie la formation au format json 
        } catch (error) { // on declare le catch 
            console.log(error); // on affiche l'erreur dans la console 
            res.status(500); // on declare le status 500 
            res.json({ error: 'Erreur lors de la mise à jour de la formation' });
            // on renvoie l'erreur au format json 
        }
    }
    async deleteFormation(req, res) { // on declare la fonction deleteFormation 
        try { // on declare le try 
            const formation = await FormationService.deleteFormation(req.params.id);
            // on declare la const formation qui va recuperer la formation par son id 
            if (!formation) { // si la formation n'existe pas 
                return res.status(404).json({ error: 'Formation non trouvée' });
                // on renvoie l'erreur au format json 
            }
            res.json({ message: 'Formation supprimée avec succès' });
            // on renvoie le message de succes au format json 
        } catch (error) { // on declare le catch 
            console.log(error); // on affiche l'erreur dans la console 
            res.status(500); // on declare le status 500 
            res.json({ error: 'Erreur lors de la suppression de la formation' });
            // on renvoie l'erreur au format json 
        }
    }
}

module.exports = new FormationController();
// on exporte la classe formationController