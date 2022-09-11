"use strict";
// get notes from local storage
let getSavedNotes = () => {
  // Check if notes is Null or not
  const notesJson = localStorage.getItem("notes");
  try {
    return notesJson ? JSON.parse(notesJson) : [];
  } catch (error) {
    return [];
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
  const notesEl = document.querySelector("#notes");
  //
  let filterNotes = notes.filter((note) =>
    note.title.includes(filters.searchText)
  );
  //
  notesEl.innerHTML = "";
  if (filterNotes.length > 0) {
    filterNotes.forEach((note) => {
      //dom element
      const noteEl = document.createElement("a");
      const buttonEl = document.createElement("button");
      const textEl = document.createElement("p");
      const statusEl = document.createElement("p");
      // buttonEl.textContent = "x";
      // /////////////////////////////
      // buttonEl.addEventListener("click", () => {
      //   removeNote(note.id);
      //   renderFilters(notes, filters);
      //   saveNotesInLocalstorage(notes);
      // });
      // /////////////////////////////

      if (note.title.length > 0) {
        textEl.textContent = note.title;
      } else {
        textEl.textContent = " Unnamed note";
      }
      /////////////////////////////
      document.querySelector("#notes").appendChild(noteEl);
      noteEl.appendChild(buttonEl);
      noteEl.appendChild(textEl);
      noteEl.setAttribute("href", `./edit.html#${note.id}`);
      statusEl.textContent = generateLastEdited(note.updatedAt);
      noteEl.appendChild(statusEl);
      noteEl.classList.add("list-item");
      noteEl.classList.add("list-item");
      textEl.classList.add("list-item__title");
      statusEl.classList.add("list-item__subtitle");
    });
  } else {
    const emptyMassage = document.createElement("p");
    emptyMassage.textContent = "No notes to show";
    emptyMassage.classList.add("empty-message");
    notesEl.appendChild(emptyMassage);
  }
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
