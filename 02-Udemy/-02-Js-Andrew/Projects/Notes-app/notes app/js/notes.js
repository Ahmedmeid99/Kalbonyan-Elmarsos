"use strict"
let notes = getSavedNotes();

const filters = {
  searchText: "",
  sortBy: "byEdited",
};
// console.log(uuidv4());
/////////////////////////////////////////////////

renderFilters(notes, filters);

////////////////////////////////////////////////
const addNoteToLocalStorage = (notes) => {
  document.querySelector("#create").addEventListener("click", () => {
    const id = createUniqueId();
    const timesTamp = moment().valueOf();
    notes.push({
      id: id,
      title: "",
      body: "",
      createdAt: timesTamp,
      updatedAt: timesTamp,
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
searchEl.addEventListener("input", (e) => {
  filters.searchText = e.target.value;

  renderFilters(notes, filters);
});
////////////////////////////////////////////////
window.addEventListener("storage", (e) => {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);
    renderFilters(notes, filters);
  }
});

////////////////////////////////////////////////
document.querySelector("#filter-by").addEventListener("change", (e) => {
  // console.log(e.target.value);
  filters.sortBy = e.target.value;
  renderFilters(notes, filters);
});
