const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Get the absolute path to the project root
const PROJECT_ROOT = path.resolve(__dirname, '..');

// Middleware to block direct access to specific directories
app.use('/templates/*', (req, res) => { 
    res.status(403).sendFile(path.join(PROJECT_ROOT, 'public/templates/Access_Denied.html')); 
});

// Set static folder
app.use(express.static(path.join(PROJECT_ROOT, 'public')));

// Route handlers
app.get('/', (req, res) => { 
    res.sendFile(path.join(PROJECT_ROOT, 'public', 'templates', 'index.html')); 
});
app.get('/community', (req, res) => { 
    res.sendFile(path.join(PROJECT_ROOT, 'public', 'templates', 'community.html')); 
});
app.get('/download', (req, res) => { 
    res.sendFile(path.join(PROJECT_ROOT, 'public', 'templates', 'download.html')); 
});
app.get('/documentation', (req, res) => { 
    res.sendFile(path.join(PROJECT_ROOT, 'public', 'templates', 'documentation.html')); 
});

// Start the server
app.listen(PORT, () => { 
    console.log(`Server is running on http://localhost:${PORT}`); 
});