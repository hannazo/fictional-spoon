const app = require('express').Router();
const { readFromFile, readAndAppend, deleteFromFile } = require('../helpers/fsNotes');
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
    console.log(err);
  }
});

// DELETE request
app.delete('/:id', (req, res) => {
  console.log("req params", req.params.id);

  if (req.params.id) {
    const noteId = req.params.id;
    deleteFromFile(noteId, './db/db.json');
    res.json(noteId);
  } else {
    console.log(err);
  }
});

module.exports = app;