const yargs = require('yargs');
const chalk = require('chalk');
const notes = require('./notes.js');

// 1. [] Add a note [id, body]
// 2. [] Removing a note [id]
// 3. [] Display all note []
// 4. [] Reading a note [id] 

yargs.command({
    command: 'remove',
    description: 'Remove the note with given id',
    builder: {
        id: {
            type: 'string',
            demandOption: true,
            describe: 'Id of the note that needs to be removed',
        }
    },
    handler: function(argv) {
        notes.removeNote(argv.id);
    }
});

yargs.command({
    command: 'add',
    description: 'Adding a note',
    builder: {
        id : {
            type: 'string',
            demandOption: true,
            describe: 'Add an id for your note'
        },
        content : {
            type: 'string',
            demandOption: true,
            describe: 'Add some content for your note'
        }
    },
    handler: function(argv) {
        if (argv.content === '') {
            console.log(chalk.red.inverse('Please supply valid content'));
            return ;
        }
        let noteToAdd = {
            id: argv.id,
            content: argv.content,
        };
        notes.addNote(noteToAdd);
    }
});

yargs.command({
    command: 'list',
    description: 'List all the notes',
    handler: function() {
        notes.showAllNotes();
    }
});

yargs.command({
    command: 'read',
    description: 'Read note with given id',
    builder: {
        id: {
            type: 'string',
            demandOption: true,
            describe: 'Read note with given id'
        }
    },
    handler: function(argv) {
        notes.readNote(argv.id);
    }
});

yargs.version('notes version 2.1.0.windows.1');

yargs.parse();
