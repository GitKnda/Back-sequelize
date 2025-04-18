const StagiaireService =
    require('../services/StagiaireService');
// on importe le service stagiaire 
class StagiaireController {
    // on declare la classe stagiaireController 
    async getAllStagiaires(req, res) { // on declare la fonction getAllStagiaires 
        try { // on declare le try  
            const stagiaires = await
                StagiaireService.getAllStagiaires();
            // on declare la const stagiaires qui va recuperer tous les stagiaires 
            res.json(stagiaires);
            // on renvoie les stagiaires au format json 
        } catch (error) { // on declare le catch 
            console.log(error); // on affiche l'erreur dans la console 
            res.status(500); // on declare le status 500 
            res.json({ error: 'Erreur lors de la récupération des stagiaires' });
            // on renvoie l'erreur au format json 
        }
    }
    async addStagiaires(req, res) { // on declare la fonction addstagiaires 
        try { // on declare le try 
            const stagiaires = await
                StagiaireService.addStagiaires(req.body);
            // on declare la const stagiaires qui va recuperer la stagiaires 
            res.status(201).json(stagiaires);
            // on renvoie la stagiaires au format json 
        } catch (error) { // on declare le catch 
            console.log(error); // on affiche l'erreur dans la 
            console
            res.status(500); // on declare le status 500 
            res.json({ error: 'Erreur lors de l\'ajout de la stagiaires' });
            // on renvoie l'erreur au format json 
        }
    }
    async getStagiairesById(req, res) { // on declare la fonction getstagiairesById 
        try { // on declare le try 
            const stagiaires = await StagiaireService.getStagiairesById(req.params.id);
            // on declare la const stagiaires qui va recuperer la stagiaires par son id 
            if (!stagiaires) { // si la stagiaires n'existe pas 
                return res.status(404).json({ error: 'Stagiaire non trouvée' });
                // on renvoie l'erreur au format json 
            }
            res.json(stagiaires);
            // on renvoie la stagiaires au format json 
        } catch (error) { // on declare le catch 
            console.log(error); // on affiche l'erreur dans la console 
            res.status(500); // on declare le status 500 
            res.json({ error: 'Erreur lors de la récupération du stagiaire' });
            // on renvoie l'erreur au format json 
        }
    }
    async updateStagiaires(req, res) { // on declare la fonction updatestagiaires 
            try { // on declare le try 
                const stagiaires = await StagiaireService.updateStagiaires(req.params.id, req.body);
                // on declare la const stagiaires qui va recuperer la stagiaires par son id 
                if (!stagiaires) { // si la stagiaires n'existe pas 
                    return res.status(404).json({ error: 'Stagiaire non trouvée' });
                    // on renvoie l'erreur au format json 
                }
                res.json(stagiaires);
                // on renvoie la stagiaires au format json 
            } catch (error) { // on declare le catch 
                console.log(error); // on affiche l'erreur dans la console 
                res.status(500); // on declare le status 500 
                res.json({ error: 'Erreur lors de la mise à jour du stagiaire' });
                // on renvoie l'erreur au format json 
            }
        }
        async deleteStagiaires(req, res) { // on declare la fonction deletestagiaires 
            try { // on declare le try 
                const stagiaires = await StagiaireService.deleteStagiaires(req.params.id);
                // on declare la const stagiaires qui va recuperer la stagiaires par son id 
                if (!stagiaires) { // si la stagiaires n'existe pas 
                    return res.status(404).json({ error: 'Stagiaire non trouvée' });
                    // on renvoie l'erreur au format json 
                }
                res.json({ message: 'Stagiaire supprimée avec succès' });
                // on renvoie le message de succes au format json 
            } catch (error) { // on declare le catch 
                console.log(error); // on affiche l'erreur dans la console 
                res.status(500); // on declare le status 500 
                res.json({ error: 'Erreur lors de la suppression du stagiaire' });
                // on renvoie l'erreur au format json 
            }
        }
}
module.exports = new StagiaireController();
// on exporte la classe stagiaireController