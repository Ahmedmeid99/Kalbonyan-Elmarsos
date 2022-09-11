let todos = [];
// to save the value of input in
const filters = {
  searchText: "",
  hideCompleted: false,
};
const todtsJSON = localStorage.getItem('todos')
if(todtsJSON !== null){
  todos = JSON.parse(todtsJSON)
}
//////////////////////////////////////////////
const renderFilter = function (todos, filters) {
  // to filter tasks
  const filterTodos = todos.filter(function (todo) {
    // filter by two wayes
    const searchTextMatch = todo.text.includes(filters.searchText); // 1
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed; // 2
    return searchTextMatch && hideCompletedMatch;
  });

  const filterTodoCompleted = filterTodos.filter(function (ele) {
    return !ele.completed;
  });

  document.querySelector("#todos").innerHTML = "";

  const summary = document.createElement("h2");
  summary.textContent = `you have ${filterTodoCompleted.length} todo leter`;
  document.querySelector("#todos").appendChild(summary);
  // to show tasks
  filterTodos.forEach(function (todo) {
    const pEl = document.createElement("p");
    if(todo.text.length >0){
      pEl.textContent = todo.text;
    }else{
      pEl.textContent = 'unname todo';
    }
    document.querySelector("#todos").appendChild(pEl);
  });
};

// global renderFilter()
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
  localStorage.setItem('todos',JSON.stringify(todos))
  e.target.elements.text.value = " ";
});

///////////////////////////
document.querySelector("#checkbox").addEventListener("click", function (e) {
  filters.hideCompleted = e.target.checked;
  console.log(filters.hideCompleted);
  renderFilter(todos, filters);
});
