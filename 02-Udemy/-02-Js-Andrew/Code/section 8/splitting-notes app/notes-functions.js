// get notes from local storage
let getSavedNotes = function () {
  // Check if notes is Null or not
  const notesJson = localStorage.getItem("notes");
  if (notesJson !== null) {
    return JSON.parse(notesJson);
  } else {
    return [];
  }
};
//
const saveNotesInLocalstorage = function (notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
};
// render notes
const renderFilters = function (notes, filters) {
  let filterNotes = notes.filter(function (note) {
    return note.title.includes(filters.searchText);
  });
  document.querySelector("#notes").innerHTML = "";
  filterNotes.forEach(function (note) {
    let pEl = document.createElement("p");
    if (note.title.length > 0) {
      pEl.textContent = note.title;
    } else {
      pEl.textContent = " Unnamed note";
    }
    document.querySelector("#notes").appendChild(pEl);
  });
};
