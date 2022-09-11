const noteId = location.hash.substring(1);
let notes = getSavedNotes();
let note = notes.find(function (note) {
  return note.id == noteId;
});
if (note === undefined) {
  location.assign("./index2.html");
}
////////////////////////////////////////
const title = document.querySelector("#note-title");
const body = document.querySelector("#note-body");
title.value = note.title;
body.value = note.body;

////////////////////////////////////////
//live change in localStorage (title , body)
title.addEventListener("input", function (e) {
  note.title = e.target.value;
  saveNotesInLocalstorage(notes);
});

body.addEventListener("input", function (e) {
  note.body = e.target.value;
  saveNotesInLocalstorage(notes);
});
////////////////////////////////////////
document.querySelector("#update").addEventListener("click", function () {
  const newNote = {
    id: noteId,
    title: title.value,
    body: body.value,
  };
  notes.splice(notes.indexOf(note), 1, newNote);
  saveNotesInLocalstorage(notes);
  location.assign("./index2.html");
});

////////////////////////////////////////
document.querySelector("#remove").addEventListener("click", function () {
  removeNote(note.id);
  saveNotesInLocalstorage(notes);
  location.assign("./index2.html");
});
///////////////////////////////////////
window.addEventListener("storage", function (e) {
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
  }
});
