let todos = todosSaved();
// to save the value of input in
const filters = {
  searchText: "",
  hideCompleted: false,
};

//////////////////////////////////////////////
renderFilter(todos, filters);

////////////////////////////
document.querySelector("#filter").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderFilter(todos, filters);
});

//////////////////////////
document.querySelector("#new-todo").addEventListener("submit", function (e) {
  e.preventDefault();
  todos.push({
    text: e.target.elements.text.value,
    completed: false,
  });
  renderFilter(todos, filters);
  localStorage.setItem("todos", JSON.stringify(todos));
  e.target.elements.text.value = " ";
});

///////////////////////////
document.querySelector("#checkbox").addEventListener("click", function (e) {
  filters.hideCompleted = e.target.checked;
  console.log(filters.hideCompleted);
  renderFilter(todos, filters);
});
