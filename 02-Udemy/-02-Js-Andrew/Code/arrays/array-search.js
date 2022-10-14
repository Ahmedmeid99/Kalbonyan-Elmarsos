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
// const index = notes.findIndex(function (note, index) {
//   console.log(note);
//   return note.title === "habbits to work on";
// });
// console.log(index);

let getnote = function (notes, title) {
  const index = notes.findIndex(function (note, index) {
    // console.log(note);
    return note.title === title;
  });
  return notes[index];
};

let note = getnote(notes, "office modification");
console.log(note);
