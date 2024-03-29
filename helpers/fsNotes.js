const fs = require('fs');
const util = require('util');

// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);

/**
 *  Function to write data to the JSON file given a destination and some content
 *  @param {string} destination The file to write content to. ('db.json')
 *  @param {object} content The content that will be writetten to the file. (newNote)
 *  @returns {void} Nothing
 */
const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 3), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );

/**
 *  Function to read data from a given a file and append some content
 *  @param {object} content The content that will be appended to the file. (newNote)
 *  @param {string} file The path to the file to save content to. ('./db/db.json')
 *  @returns {void} Nothing
 */
const readAndAppend = (content, file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err;
    const parsedData = JSON.parse(data);
    parsedData.push(content);
    writeToFile(file, parsedData);
  });
};

const deleteFromFile = (noteId, file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err;
    const parsedData = JSON.parse(data);
    const idIndex = parsedData.findIndex(note => note.id === noteId);

    if (idIndex > -1) {
      parsedData.splice(idIndex, 1);
    }
  
    writeToFile(file, parsedData)
  });
}

module.exports = { readFromFile, writeToFile, readAndAppend, deleteFromFile };