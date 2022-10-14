let notes = [
  {
    title: "my next trip",
    body: "i would like to go to spain",
  },
  {
    title: "habbits to work on",
    body: "Eating a bit better",
  },
  {
    title: "office modification",
    body: "get a new seat",
  },
];
const filters = {
  searchText: "",
};

const renderFilters = function (notes, filters) {
  let filterNotes = notes.filter(function (note) {
    return note.title.includes(filters.searchText);
  });
  document.querySelector("#notes").innerHTML = "";
  filterNotes.forEach(function (note) {
    let pEl = document.createElement("p");
    pEl.textContent = note.title;
    document.querySelector("#notes").appendChild(pEl);
  });
};
renderFilters(notes, filters);

let searchEl = document.querySelector("#search");
searchEl.addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderFilters(notes, filters);
});
// document.querySelector("#name-form").addEventListener("submit", function (e) {
//   e.preventDefault();
//   console.log(e.target.elements.firstName.value);
//   e.target.elements.firstName.value = " ";
// });

/////////////
document.querySelector("#checkbox").addEventListener("click", function (e) {
  // e.target.checked => discrip the status of input (true,false)
  console.log(e.target.checked);
});
// document.querySelector("#checkbox").checked = true;

///////////////////////////////
// document.querySelector("#create").addEventListener("click", function (e) {
//   e.target.textContent = "done";
// });

///////////////////////////////
// document.querySelector("#remove-all").addEventListener("click", function () {
//   document.querySelector("#notes p").forEach(function (note) {
//     note.remove();
//   });
// });

///////////////////////////////
// let searchEl = document.querySelector("#search");
// let para = document.createElement("p");
// searchEl.addEventListener("input", function (e) {
//   para.textContent = e.target.value;
//   renderFilters(notes, filters);
// });
// document.querySelector("body").appendChild(para);
