const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const db = require('./database/db');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Route d'inscription (à utiliser une seule fois pour créer le premier admin)
app.post('/api/register', async (req, res) => {
    const { username, password, email } = req.body;

    try {
        // Vérifier si l'utilisateur existe déjà
        db.get('SELECT * FROM users WHERE username = ?', [username], async (err, user) => {
            if (err) {
                return res.status(500).json({ error: "Erreur lors de la vérification de l'utilisateur" });
            }
            if (user) {
                return res.status(400).json({ error: "Cet utilisateur existe déjà" });
            }

            // Hasher le mot de passe
            const hashedPassword = await bcrypt.hash(password, 10);

            // Créer l'utilisateur
            const sql = 'INSERT INTO users (username, password, email) VALUES (?, ?, ?)';
            db.run(sql, [username, hashedPassword, email], function(err) {
                if (err) {
                    return res.status(500).json({ error: "Erreur lors de la création de l'utilisateur" });
                }

                res.status(201).json({ message: "Utilisateur créé avec succès" });
            });
        });
    } catch (error) {
        res.status(500).json({ error: "Erreur lors de l'inscription" });
    }
});

// Route de connexion
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    db.get('SELECT * FROM users WHERE username = ?', [username], async (err, user) => {
        if (err) {
            return res.status(500).json({ error: "Erreur lors de la connexion" });
        }
        if (!user) {
            return res.status(401).json({ error: "Nom d'utilisateur ou mot de passe incorrect" });
        }

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({ error: "Nom d'utilisateur ou mot de passe incorrect" });
        }

        res.json({ message: "Connexion réussie" });
    });
});

// Route pour enregistrer un nouveau contact (pas besoin d'auth)
app.post('/api/contacts', (req, res) => {
    const { firstName, lastName, email, phone, message } = req.body;

    const sql = `
        INSERT INTO contacts (first_name, last_name, email, phone, message)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.run(sql, [firstName, lastName, email, phone, message], function(err) {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Erreur lors de l'enregistrement du contact" });
        }
        res.status(201).json({
            message: "Contact enregistré avec succès",
            contactId: this.lastID
        });
    });
});

// Route pour récupérer tous les contacts
app.get('/api/contacts', (req, res) => {
    const sql = 'SELECT * FROM contacts ORDER BY created_at DESC';
    
    db.all(sql, [], (err, rows) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Erreur lors de la récupération des contacts" });
        }
        res.json(rows);
    });
});

app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});
