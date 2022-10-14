"use strict"
const todosSaved = () => {
  const todtsJSON = localStorage.getItem("todos");
  try {
    return todtsJSON ? JSON.parse(todtsJSON) : []
  } catch (error) {
    return []
  }
};
///////////////////////////////////
const savetodosInLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};
///////////////////////////////////
const removeTodo = (id) => {
  const todoIndex = todos.findIndex((todo) => {
    return todo.id === id;
  });
  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
};
///////////////////////////////////
//toggale the completed value of a given todo
const toggleTodo = (id) => {
  const todo = todos.find((todo) => todo.id === id);
  if (todo !== undefined) {
    todo.completed = !todo.completed;
  }
};
// to show tasks with all changes
const ShowTasks = (filterTodos) => {
  filterTodos.forEach((todo) => {
    const todoEl = document.createElement("div");
    const checkboxEl = document.createElement("input");
    const todotext = document.createElement("span");
    const removeButton = document.createElement("button");
    checkboxEl.setAttribute("type", "checkbox");
    // remove  todo event
    checkboxEl.addEventListener("change", () => {
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
    removeButton.addEventListener("click", () => {
      removeTodo(todo.id);
      renderFilter(todos, filters);
      savetodosInLocalStorage(todos);
    });
  });
};
//
const showSummary = (filterTodoCompleted) => {
  const summary = document.createElement("h2");
  summary.textContent = `you have ${filterTodoCompleted.length} todo leter`;
  document.querySelector("#todos").appendChild(summary);
  return summary;
};
//
const renderFilter = (todos, filters) => {
  // to filter tasks
  const filterTodos = todos.filter((todo) => {
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
const createUniqueId = () => {
  const randomID = Math.random();
  const id = Math.floor(randomID * 1000000000);
  return id;
};
