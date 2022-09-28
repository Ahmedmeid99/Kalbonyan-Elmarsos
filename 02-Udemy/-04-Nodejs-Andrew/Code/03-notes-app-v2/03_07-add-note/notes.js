const fs = require("fs");

const addNotes = function (title, body) {
  //...

  const notes = loadNotes();
  const countOfTitle = notes.filter((note) => note.title === title);
  if (countOfTitle.length === 0) {
    notes.push({ title: title, body: body });
    saveNotes(notes);
    console.log("new note");
  } else {
    console.log("alredy have");
    return;
  }
};
////////////////////////////////////
const saveNotes = function (notes) {
  const notesJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", notesJson);
};
////////////////////////////////////
const loadNotes = function () {
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
  saveNotes: saveNotes,
  loadNotes: loadNotes,
};
