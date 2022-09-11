let notes = [];

const filters = {
  searchText: "",
};
// Check if notes is Null or not
const notesJson =localStorage.getItem('notes')
if(notesJson !== null){
  notes = JSON.parse(notesJson)
}
/////////////////////////////////////////////////
const renderFilters = function (notes, filters) {
  let filterNotes = notes.filter(function (note) {
    return note.title.includes(filters.searchText);
  });
  document.querySelector("#notes").innerHTML = "";
  filterNotes.forEach(function (note) {
    let pEl = document.createElement("p");
    if(note.title.length >0){
      pEl.textContent = note.title;
    }else{
      pEl.textContent =' Unnamed note';
    }
    document.querySelector("#notes").appendChild(pEl);
  });
};

renderFilters(notes, filters);

////////////////////////////////////////////////
document.querySelector('#create').addEventListener('submit',function(e){
  e.preventDefault();
  // console.log(e.target.elements.firstName.value);
  // e.target.elements.firstName.value = " ";
  notes.push({
    title: "",
    body:""
  })
  // update notes
  localStorage.setItem('notes',JSON.stringify(notes))
  renderFilters(notes,filters)
})
////////////////////////////////////////////////
let searchEl = document.querySelector("#search");
searchEl.addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderFilters(notes, filters);
});


