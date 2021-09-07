const fs = require('fs');
const chalk = require('chalk');

// 1. [X] Add a note [id, body]
// 2. [X] Removing a note [id]
// 3. [X] Display all note []
// 4. [X] Reading a note [id] 

const filename = './notes.json'

function readNote(id) {
    let notes = loadNotes();
    note = notes.find((note) => note.id == id);
    console.log(chalk.cyan(note.content));
}

function removeNote(id) {
    let notes = loadNotes();
    let filteredNotes = notes.filter(note => note.id != id);
    if (notes.length == filteredNotes.length) {
        console.log(chalk.red('Note not found!'));
        return ;
    }
    saveNotes(filteredNotes);
    console.log(chalk.green('Note was deleted!'));
}

function showAllNotes() {
    let notes = loadNotes();
    console.log(chalk.blue('Showing all notes..'));
    notes.forEach(note => {
        console.log(chalk.yellow(`${note.id}`))
    });
}

// adds the note to the notes.json file
function addNote(note) {
    let allNotes = loadNotes();
    allNotes = [...allNotes, note];
    saveNotes(allNotes);
}

// read form notes.json and return the notes as list
function loadNotes() {
    let dataBuffer = fs.readFileSync(filename);
    let dataString = dataBuffer.toString();
    return JSON.parse(dataString);
}

// save the list of notes to the notes.json file
function saveNotes(notes) {
    let notesJson = JSON.stringify(notes);
    fs.writeFileSync(filename, notesJson);
}

module.exports = {
    removeNote: removeNote,
    showAllNotes: showAllNotes,
    readNote: readNote,
    addNote: addNote
}
