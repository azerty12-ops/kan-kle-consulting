const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

const JWT_SECRET = 'votre_secret_jwt';

// Utilisateur admin par défaut
const adminUser = {
  username: 'admin',
  password: 'admin123' // Dans un vrai projet, utilisez un mot de passe plus sécurisé
};

// Route de connexion
app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;

  if (username === adminUser.username && password === adminUser.password) {
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '24h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Identifiants invalides' });
  }
});

// Middleware pour vérifier le token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token manquant' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Token invalide' });
    }
    req.user = user;
    next();
  });
};

// Liste des contacts (protégée)
const contacts = [];

app.post('/api/contacts', (req, res) => {
  const contact = {
    id: Date.now(),
    ...req.body,
    created_at: new Date()
  };
  contacts.push(contact);
  res.status(201).json(contact);
});

app.get('/api/contacts', authenticateToken, (req, res) => {
  res.json(contacts);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
