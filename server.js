// server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth');
const bankingRoutes = require('./routes/banking');

app.use(authRoutes);
app.use(bankingRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
