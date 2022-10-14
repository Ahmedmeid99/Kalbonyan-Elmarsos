// truthy and falsy
/*
falsy => [0 , false , " " , NaN , undefined , null] only
*/
let note = "";
///////////////////////////////////////////
// if (note) {
//   console.log("yes it is found");
// } else {
//   console.log("no it is not found");
// } // no it is not found

// if (!note) {
//   console.log("no it is not found");
// } else {
//   console.log("yes it is found");
// } //no it is not found

///////////////////////////////////////////
if ([]) {
  console.log("yes it is found");
} else {
  console.log("no it is not found");
} //yes it is found

///////////////////////////////////////////
if ({}) {
  console.log("yes it is found");
} else {
  console.log("no it is not found");
} //yes it is found

///////////////////////////////////////////
console.log("6" + 5);
console.log("6" - 5);
console.log("6" == 6);
console.log("6" === 6);
console.log(6 === 6);
console.log(typeof 23);
console.log(typeof "88");
console.log(typeof true);
