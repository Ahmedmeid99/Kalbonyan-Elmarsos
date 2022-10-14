"use strict";
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
  const text = e.target.elements.text.value.trim();
  e.preventDefault();
  if (text.length > 0) {
    todos.push({
      id: createUniqueId(),
      text: text,
      completed: false,
    });
  }

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
