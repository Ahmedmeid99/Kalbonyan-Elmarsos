const todos = [
  {
    text: "learn js",
    completed: true,
  },
  {
    text: "learn python",
    completed: false,
  },
  {
    text: "learn css",
    completed: true,
  },
  {
    text: "learn react",
    completed: false,
  },
];
// to save the value of input in
const filters = {
  searchText: "",
};
const renderFilter = function (todos, filters) {
  // to filter tasks
  let filterTodos = todos.filter(function (todo) {
    return todo.text.includes(filters.searchText);
  });
  const filterTodoCompleted = filterTodos.filter(function (ele) {
    return !ele.completed;
  });

  // clear taskes to show the filters only
  document.querySelector("#todos").innerHTML = "";
  const summary = document.createElement("h2");
  summary.textContent = `you have ${filterTodoCompleted.length} todo leter`;
  document.querySelector("#todos").appendChild(summary);
  // to show tasks
  filterTodos.forEach(function (todo) {
    const pEl = document.createElement("p");
    pEl.textContent = todo.text;
    document.querySelector("#todos").appendChild(pEl);
  });
};
// global renderFilter()
renderFilter(todos, filters);
// event input in (search input)
document.querySelector("#filter").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderFilter(todos, filters);
});
document.querySelector("#new-todo").addEventListener("submit", function (e) {
  e.preventDefault();
  todos.push({
    text: e.target.elements.text.value,
    completed: false,
  });
  // local renderFilter()
  renderFilter(todos, filters);
  e.target.elements.text.value = " ";
  // <input type="text" placeholder="film a video" name="text">
});
// todos.forEach(function (task) {
//   const p = document.createElement("p");
//   p.textContent = task.text;
//   document.querySelector("#todos").appendChild(p);
// });
