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

// render notes
const renderFilters = function (notes, filters) {
  let filterNotes = notes.filter(function (note) {
    return note.title.includes(filters.searchText);
  });
  document.querySelector("#notes").innerHTML = "";
  filterNotes.forEach(function (note) {
    let divEl = document.createElement("div");
    let buttonEl = document.createElement("button");
    let spanEl = document.createElement("span");
    buttonEl.textContent = "x";
    buttonEl.addEventListener("click", function () {
      removeNote(note.id);
      renderFilters(notes, filters);
      saveNotesInLocalstorage(notes);
    });

    if (note.title.length > 0) {
      spanEl.textContent = note.title;
    } else {
      spanEl.textContent = " Unnamed note";
    }

    document.querySelector("#notes").appendChild(divEl);
    divEl.appendChild(buttonEl);
    divEl.appendChild(spanEl);
  });
};
////////////////////////////////////////////
const createUniqueId = function () {
  const randomID = Math.random();
  const id = Math.floor(randomID * 1000000000);
  return id;
};

console.log(createUniqueId());
