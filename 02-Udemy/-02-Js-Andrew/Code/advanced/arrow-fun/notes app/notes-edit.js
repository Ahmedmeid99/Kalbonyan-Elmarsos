const title = document.querySelector("#note-title");
const body = document.querySelector("#note-body");
const dateElement = document.querySelector("#last-edited");
const noteId = location.hash.substring(1);
let notes = getSavedNotes();
let note = notes.find(function (note) {
  return note.id == noteId;
});
if (note === undefined) {
  location.assign("./index2.html");
}
////////////////////////////////////////
title.value = note.title;
body.value = note.body;
dateElement.textContent = generateLastEdited(note.updatedAt);
////////////////////////////////////////
//live change in localStorage (title , body)
title.addEventListener("input", (e) => {
  note.title = e.target.value;
  note.updatedAt = moment().valueOf();
  dateElement.textContent = generateLastEdited(note.updatedAt);
  saveNotesInLocalstorage(notes);
});

body.addEventListener("input", (e) => {
  note.body = e.target.value;
  note.updatedAt = moment().valueOf();
  dateElement.textContent = generateLastEdited(note.updatedAt);
  saveNotesInLocalstorage(notes);
});
////////////////////////////////////////
document.querySelector("#update").addEventListener("click", () => {
  // const newNote = {
  //   id: noteId,
  //   title: title.value,
  //   body: body.value,
  // };
  // notes.splice(notes.indexOf(note), 1, newNote);
  saveNotesInLocalstorage(notes);
  location.assign("./index2.html");
});

////////////////////////////////////////
document.querySelector("#remove").addEventListener("click", () => {
  removeNote(note.id);
  saveNotesInLocalstorage(notes);
  location.assign("./index2.html");
});
///////////////////////////////////////
window.addEventListener("storage", (e) => {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);
    note = notes.find(function (note) {
      return note.id == noteId;
    });
    if (note === undefined) {
      location.assign("./index2.html");
    }
    title.value = note.title;
    body.value = note.body;
    dateElement.textContent = generateLastEdited(note.updatedAt);
  }
});
