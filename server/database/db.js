const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Créer une connexion à la base de données
const db = new sqlite3.Database(
    path.join(__dirname, 'contacts.db'),
    sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
    (err) => {
        if (err) {
            console.error('Erreur lors de la connexion à la base de données:', err.message);
        } else {
            console.log('Connecté à la base de données SQLite');
            // Créer la table si elle n'existe pas
            db.run(require('fs').readFileSync(path.join(__dirname, 'schema.sql'), 'utf8'));
        }
    }
);

module.exports = db;
