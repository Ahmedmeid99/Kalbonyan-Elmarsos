let notes = getSavedNotes();

const filters = {
  searchText: "",
};
// console.log(uuidv4());
/////////////////////////////////////////////////

renderFilters(notes, filters);

//////////////////////(work on)//////////////////////////

////////////////////////////////////////////////
const addNoteToLocalStorage = function (notes) {
  document.querySelector("#create").addEventListener("click", function () {
    const id = createUniqueId();
    notes.push({
      id: id,
      title: "",
      body: "",
    });
    // update notes
    saveNotesInLocalstorage(notes);
    // renderFilters(notes, filters);
    location.assign(`./edit.html#${id}`);
    console.log(id);
  });
};
addNoteToLocalStorage(notes);
////////////////////////////////////////////////
let searchEl = document.querySelector("#search");
searchEl.addEventListener("input", function (e) {
  filters.searchText = e.target.value;

  renderFilters(notes, filters);
});
////////////////////////////////////////////////
window.addEventListener("storage", function (e) {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);
    renderFilters(notes, filters);
  }
});
