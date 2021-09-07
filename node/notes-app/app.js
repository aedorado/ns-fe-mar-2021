const notes = require('./notes.js');

// process.argv.forEach((val, index) => {
//     console.log(`${index}: ${val}`)
// })

// notes.writeNote('content from app.js\n')
// notes.readNote();

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

console.log(noteToWrite);

notes.writeNote(noteToWrite)
notes.readNote();

