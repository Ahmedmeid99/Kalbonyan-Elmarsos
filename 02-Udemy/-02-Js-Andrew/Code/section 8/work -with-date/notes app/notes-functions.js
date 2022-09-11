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

//////////////////////////////////////////////
const removeNote = function (id) {
  const indexNote = notes.findIndex(function (note) {
    return note.id === id;
  });
  if (indexNote > -1) {
    notes.splice(indexNote, 1);
  }
};

// sort notes byone of 3 ways
const sortNotes = function (notes, sortBy) {
  // 01
  if (sortBy === "byEdited") {
    return notes.sort(function (a, b) {
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
    return notes.sort(function (a, b) {
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
    return notes.sort(function (a, b) {
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
const renderFilters = function (notes, filters) {
  notes = sortNotes(notes, filters.sortBy); //
  let filterNotes = notes.filter(function (note) {
    return note.title.includes(filters.searchText);
  });
  document.querySelector("#notes").innerHTML = "";
  filterNotes.forEach(function (note) {
    //dom element
    let divEl = document.createElement("div");
    let buttonEl = document.createElement("button");
    let spanEl = document.createElement("a");
    buttonEl.textContent = "x";
    /////////////////////////////
    buttonEl.addEventListener("click", function () {
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
const createUniqueId = function () {
  const randomID = Math.random();
  const id = Math.floor(randomID * 1000000000);
  return id;
};
////////////////////////////////////////////
const generateLastEdited = function (updatedAt) {
  return `last edited ${moment(updatedAt).fromNow()} `;
};
