// Importer le module http
const http = require('http');
const server = require('./index');

describe('Server', () => {
  afterAll((done) => {
    server.close(done);
    });

    it('responds', (done) => {
      http.get('http://localhost:3000', (response) => {
        expect(response.statusCode).toBe(200);
        let data = '';
        response.on('data', (chunk) => {
          data += chunk;
        });
        response.on('end', () => {
          expect(data).toBe('Hello World!');
          done();
        }); 
      });
    });
});

// Écouter le port 3000
server.listen(3000, () => {
  console.log('Le serveur est démarré sur http://localhost:3000/');
});
