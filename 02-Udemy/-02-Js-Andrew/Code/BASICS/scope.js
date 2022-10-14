//////////////////////
// SCOPE
//////////////////////
/*
- global scope
- local scope

//global
----//local
--------//local
----//local
*/
let myName = "Ahmed"; // global
if (true) {
  let myName = "Eid"; // local
  console.log(myName); // Eid
  if (true) {
    let myName = "Ali"; // local
    console.log(myName); // Ali
  }
}
if (true) {
  let myName = "Mohamaed"; // local
  console.log(myName); // Mohamaed
}
console.log(myName); // Ahmed
