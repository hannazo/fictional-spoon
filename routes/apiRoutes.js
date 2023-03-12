const app = require('express').Router();

app.get('/notes', (req, res) => {
    console.log(req.body);

    const { title, text} = req.body;

    if (req.body) {
        const newNote = {
            title,
            text
        };

        readAndAppend(newNote, '.db/db/json');
        console.log(`Added new note successfully`);
    } else {
        console.log(err);
    }
});

module.exports = app;