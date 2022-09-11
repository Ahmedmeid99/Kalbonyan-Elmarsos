//
const todosSaved = function () {
  const todtsJSON = localStorage.getItem("todos");
  if (todtsJSON !== null) {
    return JSON.parse(todtsJSON);
  } else {
    return [];
  }
};
///////////////////////////////////
const savetodosInLocalStorage = function (todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
};
///////////////////////////////////
const removeTodo = function (id) {
  const todoIndex = todos.findIndex(function (todo) {
    return todo.id === id;
  });
  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
};
///////////////////////////////////
//toggale the completed value of a given todo
const toggleTodo = function (id) {
  const todo = todos.find(function (todo) {
    return todo.id === id;
  });
  if (todo !== undefined) {
    todo.completed = !todo.completed;
  }
};
// to show tasks with all changes
const ShowTasks = function (filterTodos) {
  filterTodos.forEach(function (todo) {
    const todoEl = document.createElement("div");
    const checkboxEl = document.createElement("input");
    const todotext = document.createElement("span");
    const removeButton = document.createElement("button");
    checkboxEl.setAttribute("type", "checkbox");
    // remove  todo event
    checkboxEl.addEventListener("change", function () {
      toggleTodo(todo.id);
      renderFilter(todos, filters);
      savetodosInLocalStorage(todos);
    });
    checkboxEl.checked = todo.completed;
    if (todo.text.length > 0) {
      todotext.textContent = todo.text;
    } else {
      todotext.textContent = "unname todo";
    }

    document.querySelector("#todos").appendChild(todoEl);
    todoEl.appendChild(checkboxEl);
    todoEl.appendChild(todotext);
    todoEl.appendChild(removeButton);
    removeButton.textContent = "x";
    // remove  todo event
    removeButton.addEventListener("click", function () {
      removeTodo(todo.id);
      renderFilter(todos, filters);
      savetodosInLocalStorage(todos);
    });
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
////////////////////////////////////////////
const createUniqueId = function () {
  const randomID = Math.random();
  const id = Math.floor(randomID * 1000000000);
  return id;
};
