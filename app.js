// Importer le module http
const http = require('http');

// Créer un objet serveur
const server = http.createServer((req, res) => {
    // Définir le code de statut et le type de contenu de la réponse
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    // Envoyer un message HTML dans la réponse
    res.end('<h1>Bonjour, monde!</h1>');
});

// Écouter le port 3000
server.listen(3000, () => {
  console.log('Le serveur est démarré sur http://localhost:3000/');
});
