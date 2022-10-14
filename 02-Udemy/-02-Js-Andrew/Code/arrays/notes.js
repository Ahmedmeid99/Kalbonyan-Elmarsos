const notes = ["note 1", "note 2", "note 3"];

// console.log(notes); // [ 'note 1', 'note 2', 'note 3' ]
// console.log(notes.length); // 3
// console.log(notes[notes.length - 1]); // note 3

// notes.push("new note 4");
// console.log(notes); // [ 'note 1', 'note 2', 'note 3', 'new note 4' ]
// notes.pop();
// console.log(notes); // [ 'note 1', 'note 2', 'note 3' ]

// notes.unshift("note 0");
// console.log(notes); // [ 'note 0', 'note 1', 'note 2', 'note 3' ]
// notes.shift();
// console.log(notes); // ['note 1', 'note 2', 'note 3' ]

// // update item by newItem
// notes.splice(1, 1, "this is a new second item");
// console.log(notes); // [ 'note 1', 'this is a new second item', 'note 3' ]

// delete item
notes.splice(1, 1);
console.log(notes); // [ 'note 1', 'note 3' ]

notes[1] = "note 2";
console.log(notes); // [ 'note 1', 'note 2' ]
