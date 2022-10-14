let notes = [
  {
    title: "my next trip",
    body: "i would like to go to spain",
  },
  {
    title: "habbits to work on",
    body: "Eating a bit better",
  },
  {
    title: "office modification",
    body: "get a new seat",
  },
];
// how come first is less than how come letter
console.log("a" > "b"); // false
console.log("a" < "b"); // true

const sortNotes = function (notes) {
  notes.sort(function (a, b) {
    // a than b (defualt)
    // 0 => (dont sort) 1 => (sort from a to b) -1 => (sort from b to a)
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
};
sortNotes(notes);
console.log(notes);
/*
[
  { title: 'habbits to work on', body: 'Eating a bit better' },
  { title: 'my next trip', body: 'i would like to go to spain' },
  { title: 'office modification', body: 'get a new seat' }
]
*/
///////////////////////
// CHALANGE
///////////////////////
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
const sortTodo = function (todos) {
  todos.sort(function (a, b) {
    if (!a.completed && b.completed) {
      return 1;
    }
    if (a.completed && !b.completed) {
      return -1;
    }
  });
};
sortTodo(todos);
console.log(todos);
