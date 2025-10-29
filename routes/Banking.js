// routes/banking.js
const express = require('express');
const verifyToken = require('../middleware/auth');
const router = express.Router();

// Dummy in-memory account balance
let balance = 1000;

// GET /balance
router.get('/balance', verifyToken, (req, res) => {
  res.status(200).json({ balance });
});

// POST /deposit
router.post('/deposit', verifyToken, (req, res) => {
  const { amount } = req.body;

  if (!amount || amount <= 0) {
    return res.status(400).json({ message: 'Invalid deposit amount' });
  }

  balance += amount;
  res.status(200).json({ message: `Deposited $${amount}`, newBalance: balance });
});

// POST /withdraw
router.post('/withdraw', verifyToken, (req, res) => {
  const { amount } = req.body;

  if (!amount || amount <= 0) {
    return res.status(400).json({ message: 'Invalid withdrawal amount' });
  }

  if (amount > balance) {
    return res.status(400).json({ message: 'Insufficient balance' });
  }

  balance -= amount;
  res.status(200).json({ message: `Withdrew $${amount}`, newBalance: balance });
});

module.exports = router;
