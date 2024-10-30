document.querySelector(".code-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Récupérer le code de vérification
    const code = document.querySelector('input[name="code"]').value;

    // Envoyer le code au serveur
    fetch('/capture-code', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code })
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        alert("Code de vérification reçu !");
    })
    .catch(error => console.error('Erreur:', error));
});