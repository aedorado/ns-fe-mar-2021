const notes = require('./notes.js');

let noteToWrite = {}

let args = process.argv.slice(2);
args.forEach((item, idx) => {
    itemParts = item.split('=');
    if (itemParts[0] == 'id') {
        noteToWrite['id'] = itemParts[1];
    } else if (itemParts[0] == 'content') {
        noteToWrite['content'] = itemParts[1];
    }
});

notes.readNote('note 5');
// notes.addNote(noteToWrite);
// notes.showAllNotes();
