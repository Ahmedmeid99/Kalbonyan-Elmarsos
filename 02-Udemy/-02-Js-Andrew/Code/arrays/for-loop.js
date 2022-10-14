const notes = ["note 1", "note 2", "note 3"];
/*
for (let start = num(index); end =  num(index); rate of increase){}
*/
for (let count = 0; count <= 3; count++) {
  console.log(count);
} // 0 1 2 3

for (let count = 0; count < notes.length; count++) {
  console.log(notes[count]);
} // note 1  note 2  note 3

for (let count = notes.length - 1; count >= 0; count--) {
  console.log(notes[count]);
} // note 3  note 2  note 1
