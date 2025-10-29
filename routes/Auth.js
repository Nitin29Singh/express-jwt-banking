// routes/auth.js
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const SECRET_KEY = 'myjwtsecretkey';

// Mock user data
const user = {
  username: 'user1',
  password: 'password123'
};

// POST /login
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === user.username && password === user.password) {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
    return res.status(200).json({ token });
  }

  return res.status(401).json({ message: 'Invalid credentials' });
});

module.exports = router;
