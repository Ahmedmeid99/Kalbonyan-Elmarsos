 "use strict"
 let todos = todosSaved();
// to save the value of input in
const filters = {
  searchText: "",
  hideCompleted: false,
};

//////////////////////////////////////////////
renderFilter(todos, filters);

////////////////////////////
document.querySelector("#filter").addEventListener("input", (e) => {
  filters.searchText = e.target.value;
  renderFilter(todos, filters);
});

//////////////////////////
document.querySelector("#new-todo").addEventListener("submit", (e) => {
  e.preventDefault();
  todos.push({
    id: createUniqueId(),
    text: e.target.elements.text.value,
    completed: false,
  });
  renderFilter(todos, filters);
  savetodosInLocalStorage(todos);
  e.target.elements.text.value = " ";
});

///////////////////////////
document.querySelector("#checkbox").addEventListener("click", (e) => {
  filters.hideCompleted = e.target.checked;
  console.log(filters.hideCompleted);
  renderFilter(todos, filters);
});
