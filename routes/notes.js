const app = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsNotes');
const { v4: uuidv4 } = require('uuid');

// GET Route for retrieving all the notes
app.get('/', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new note
app.post('/', (req, res) => {
  console.log(req.body);

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuidv4()
    };

    readAndAppend(newNote, './db/db.json');
    res.json(newNote);
  } else {
    res.error('Error in saving note');
  }
});

module.exports = app;