const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return "Your notes....!";
}

const addNote = (title, body) =>{
    const notes = loadNotes();
    // const duplicateNotes = notes.filter((note) =>{
    //     return note.title.toLowerCase()  === title.toLowerCase();
    // });

    // ES6 method function
    const duplicateNotes = notes.filter((note) => note.title.toLowerCase() === title.toLowerCase())

    if(duplicateNotes.length === 0){
        notes.push({
            title : title,
            body: body
        });
        saveNotes(notes);
        console.log("New note added");
    }else{
        console.log("Note title taken!")
    }    
}

const removeNote = (title) =>{
    const notes = loadNotes();
    // const notesToKeep = notes.filter((note) => {
    //     return note.title.toLowerCase() !== title.toLowerCase();
    // })
    // ES6 method 
    const notesToKeep = notes.filter((note) => note.title.toLowerCase() !== title.toLowerCase());
    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse("Note removed!"));
        saveNotes(notesToKeep);
    }else{
        console.log(chalk.red.inverse("No note found!"));
    }
}

const listNotes = () =>{
    console.log(chalk.bold.green("Your notes!"));
    const notes = loadNotes();
    notes.forEach((note) => console.log(note.title));
}

const readNotes = (title) =>{
    console.log(chalk.red.inverse("Inside readNote"))
    const notes = loadNotes();
    console.log(chalk.inverse.green(JSON.stringify(notes)))
    const note = notes.find((note) => note.title.toLowerCase() === title.toLowerCase);
    console.log(chalk.inverse(note.title));
    console.log(note.body);
}


const loadNotes = () =>{
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        return (JSON.parse(dataBuffer.toString()));
    }catch(e){
        return []
    } 
}

const saveNotes = (notes) =>{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}


module.exports = {
    getNotes : getNotes, 
    addNote : addNote,
    loadNotes : loadNotes,
    saveNotes : saveNotes,
    removeNote : removeNote,
    listNotes : listNotes,
    readNotes : readNotes
}