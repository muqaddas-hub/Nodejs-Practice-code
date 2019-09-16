const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs'); 
const notesFunctions = require('./notes.js');

// Customize yargs version
yargs.version('1.1.0');
 
// console.log(yargs.command)
// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note!',
    'builder': {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: "Note body",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notesFunctions.addNote(argv.title, argv.body);       
    }
});

// Create remove Command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe: "Note title",
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notesFunctions.removeNote(argv.title);
    }
});

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler(){
        notesFunctions.listNotes()
    }
});

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder:{
        title:{
            describe: "Note title",
            demandOption: true,
            type:"string"
        }
    },
    handler(argv){
        notesFunctions.readNotes(argv.title);
    }
});
console.log(yargs.argv)

yargs.parse()

// const command = process.argv[2];
// console.log(process.argv);
// console.log(notesFunctions.getNotes());
// console.log(validator.isEmail("muqadas@addo.ai"));
// console.log(process.env.title)
// console.log(process.argv)  

