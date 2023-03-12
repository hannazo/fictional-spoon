const htmlRoutes = require('express').Router();
const path = require('path');

// Get route for homepage
htmlRoutes.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/index.html'))
);

// Get route for notes page
htmlRoutes.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/notes.html'))
);

module.exports = htmlRoutes;