const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();

// Use environment variables
const port = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

// Security middleware
const helmet = require('helmet');
app.use(helmet());

// Middleware
app.use(express.json());
app.use(express.static('Public'));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'mainapp.html'));
});

app.listen(port, () => {
    console.log(`Server running in ${NODE_ENV} mode on port ${port}`);
});