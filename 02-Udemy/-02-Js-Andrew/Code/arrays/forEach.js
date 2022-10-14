/*************************/
// array.forEach(function(item,index){})
/*************************/
const notes = ["note 1", "note 2", "note 3"];
console.log(`you have ${notes.length} notes`);
notes.forEach(function (note, index) {
  //   console.log(index + 1);

  //   console.log(note);

  console.log(`${index + 1} - ${note}`);
});
/*
you have 3 notes
1 - note 1
2 - note 2
3 - note 3
*/
