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
let findNotes = function (notes, query) {
  let filterNotes = notes.filter(function (note) {
    let inTitle = note.title.includes(query);
    let inBody = note.body.includes(query);
    return inTitle || inBody;
  });
  return filterNotes;
};
let result = findNotes(notes, "work");
console.log(result); // [ { title: 'habbits to work on', body: 'Eating a bit better' } ]

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
// fliter create a new array and dont change in the main array
let array1 = [1, 2, 3, 4, 5];
let fliterArray = array1.filter(function (item) {
  return item > 2;
});
console.log(fliterArray); // [ 3, 4, 5 ]

//show only the tasks that you completed (completed: true)

let showCompletedTasks = function (tasks) {
  let filterTasks = tasks.filter(function (task) {
    return task.completed === true;
  });
  return filterTasks;
};

const showtask = showCompletedTasks(todos);

console.log(showtask);
/*
{ text: 'learn js', completed: true },
{ text: 'learn css', completed: true }
*/
