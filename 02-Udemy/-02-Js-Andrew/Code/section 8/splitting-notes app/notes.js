let notes = getSavedNotes();

const filters = {
  searchText: "",
};

/////////////////////////////////////////////////

renderFilters(notes, filters);

////////////////////////////////////////////////
const addNoteToLocalStorage = function (notes) {
  document.querySelector("#create").addEventListener("click", function () {
    notes.push({
      title: "",
      body: "",
    });
    // update notes
    saveNotesInLocalstorage(notes);
    renderFilters(notes, filters);
  });
};
addNoteToLocalStorage(notes);
////////////////////////////////////////////////
let searchEl = document.querySelector("#search");
searchEl.addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  console.log(filters.searchText);

  renderFilters(notes, filters);
});
