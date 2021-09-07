const fs = require('fs');
const chalk = require('chalk');

// 1. Add a note [id, body]
// 2. Removing a note [id]
// 3. Display all note []
// 4. Reading a note [id]

const filename = './notes.json'





function readNote() {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err && err.code === 'ENOENT') {
            console.log(chalk.red.inverse("File Does not exist"))
        } else {
            console.log(chalk.blue.inverse(data));
        }
    });
}

function writeNote(content) {
    // fs.writeFile(filename, content, { flag: 'a+' }, err => {
    fs.writeFile(filename, JSON.stringify(content), err => {
        if (err) {
            console.log(err);
        }
    });
}

module.exports = {
    readNote: readNote,
    writeNote: writeNote
}
