const chalk = require("chalk");
const fs = require("fs");

const addNotes = (title, body) => {
  //...
  const notes = loadNotes();

  const titleIsFind = notes.find((note) => note.title === title);

  if (!titleIsFind) {
    notes.push({ title: title, body: body });
    saveNotes(notes);
    console.log("new note");
  } else {
    console.log("alredy have");
    return;
  }
};

////////////////////////////////////
const removeNote = (noteTitle) => {
  const notes = loadNotes();
  const updatedNotes = notes.filter((note) => note.title !== noteTitle);
  if (notes.length > updatedNotes.length) {
    console.log(chalk.bgGreen(`${noteTitle} (note) has been removed`));
    saveNotes(updatedNotes);
  } else {
    console.log(chalk.bgRed(`${noteTitle} (note) is not found to remove`));
  }
};

////////////////////////////////////
const listNote = () => {
  const notes = loadNotes();
  console.log(chalk.bgBlue("Your Notes"));
  notes.map((note) => console.log(note.title));
};

////////////////////////////////////
const readNote = (title) => {
  const notes = loadNotes();
  const findNote = notes.find((note) => note.title === title);
  if (findNote) {
    console.log(chalk.green.inverse(findNote.title));
    console.log(findNote.body);
  } else {
    console.log(chalk.red.inverse("this note is not found"));
  }
};

////////////////////////////////////
const saveNotes = (notes) => {
  const notesJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", notesJson);
};

////////////////////////////////////
const loadNotes = () => {
  //...
  try {
    const notesBuffer = fs.readFileSync("notes.json");
    const notesJson = notesBuffer.toString();
    return JSON.parse(notesJson);
  } catch {
    return [];
  }
};

////////////////////////////////////

module.exports = {
  addNotes: addNotes,
  removeNote: removeNote,
  listNote: listNote,
  readNote: readNote,
};
