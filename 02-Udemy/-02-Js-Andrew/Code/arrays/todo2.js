const todo = [
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

const deleteTodo = function (todoList, todotask) {
  let index = todoList.findIndex(function (task) {
    return task.text === todotask;
  });
  if (index > -1) {
    todo.splice(index, 1);
  }
  return index;
};
deleteTodo(todo, "learn python");
console.log(todo);
