const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const PROJECT_ROOT = path.resolve(__dirname, '..');

app.use('/templates/*', (req, res) => { 
    res.status(403).sendFile(path.join(PROJECT_ROOT, 'public/templates/Access_Denied.html')); 
});

app.use(express.static(path.join(PROJECT_ROOT, 'public')));

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

app.use((req, res) => {
    res.status(404).sendFile(path.join(PROJECT_ROOT, 'public/templates/404.html'));
});

app.listen(PORT, () => { 
    console.log(`Server is running on http://localhost:${PORT}`); 
});