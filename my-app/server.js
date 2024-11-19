const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware
app.use('/Public', express.static(path.join(__dirname, 'Public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add to server.js
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'mainapp.html'));
});

// Mock login API
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    // Mock authentication
    if (email === "test@example.com" && password === "password") {
        res.json({ status: 'success' });
    } else {
        res.status(401).json({ 
            status: 'error',
            message: 'Invalid credentials'
        });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});