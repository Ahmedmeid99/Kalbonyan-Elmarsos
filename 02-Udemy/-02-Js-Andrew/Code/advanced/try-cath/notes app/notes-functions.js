"use strict"
// get notes from local storage
let getSavedNotes = () => {
  // Check if notes is Null or not
  const notesJson = localStorage.getItem("notes")
  try {
    return notesJson  ? JSON.parse(notesJson) : [];
  } catch (error) {
    return []
  }
};
//
const saveNotesInLocalstorage = (notes) => {
  localStorage.setItem("notes", JSON.stringify(notes));
};

//////////////////////////////////////////////
const removeNote = (id) => {
  const indexNote = notes.findIndex((note) => note.id === id);
  if (indexNote > -1) {
    notes.splice(indexNote, 1);
  }
};

// sort notes byone of 3 ways
const sortNotes = (notes, sortBy) => {
  // 01
  if (sortBy === "byEdited") {
    return notes.sort((a, b) => {
      if (a.updatedAt > b.updatedAt) {
        return -1;
      } else if (a.updatedAt < b.updatedAt) {
        return 1;
      } else {
        return 0;
      }
    });
  }
  // 02
  else if (sortBy === "byCreated") {
    return notes.sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1;
      } else if (a.updatedAt < b.updatedAt) {
        return 1;
      } else {
        return 0;
      }
    });
    // 03
  } else if (sortBy === "byAlphabetical") {
    return notes.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    });
  } else {
    return notes;
  }
};
// render notes
const renderFilters = (notes, filters) => {
  notes = sortNotes(notes, filters.sortBy); //
  //
  let filterNotes = notes.filter((note) =>
    note.title.includes(filters.searchText)
  );
  //
  document.querySelector("#notes").innerHTML = "";
  filterNotes.forEach((note) => {
    //dom element
    let divEl = document.createElement("div");
    let buttonEl = document.createElement("button");
    let spanEl = document.createElement("a");
    buttonEl.textContent = "x";
    /////////////////////////////
    buttonEl.addEventListener("click", () => {
      removeNote(note.id);
      renderFilters(notes, filters);
      saveNotesInLocalstorage(notes);
    });
    /////////////////////////////

    if (note.title.length > 0) {
      spanEl.textContent = note.title;
    } else {
      spanEl.textContent = " Unnamed note";
    }

    /////////////////////////////
    document.querySelector("#notes").appendChild(divEl);
    divEl.appendChild(buttonEl);
    divEl.appendChild(spanEl);
    spanEl.setAttribute("href", `./edit.html#${note.id}`);
  });
};
////////////////////////////////////////////
const createUniqueId = () => {
  const randomID = Math.random();
  const id = Math.floor(randomID * 1000000000);
  return id;
};
////////////////////////////////////////////
const generateLastEdited = (updatedAt) => {
  return `last edited ${moment(updatedAt).fromNow()} `;
};
