//
const todosSaved = function () {
  const todtsJSON = localStorage.getItem("todos");
  if (todtsJSON !== null) {
    return JSON.parse(todtsJSON);
  } else {
    return [];
  }
};

// to show tasks
const ShowTasks = function (filterTodos) {
  filterTodos.forEach(function (todo) {
    const pEl = document.createElement("p");
    if (todo.text.length > 0) {
      pEl.textContent = todo.text;
    } else {
      pEl.textContent = "unname todo";
    }
    document.querySelector("#todos").appendChild(pEl);
  });
};
//
const showSummary = function (filterTodoCompleted) {
  const summary = document.createElement("h2");
  summary.textContent = `you have ${filterTodoCompleted.length} todo leter`;
  document.querySelector("#todos").appendChild(summary);
  return summary;
};
//
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
  showSummary(filterTodoCompleted);
  ShowTasks(filterTodos);
};
