// const age = 23;

// if (age > 20) {
//   console.log(`it is more than 20`);
// } else {
//   console.log(`it is less than 20`);
// }

/////////////////////////////////////////
/* ES6 condition */
const myAge = 23;
const massage = myAge > 20 ? `it is more than 20` : `it is less than 20`;
// console.log(massage); // it is more than 20

/////////////////////////////////////////
/* */
const massage1 = () => console.log(`it is more than 20`);
const massage2 = () => console.log(`it is less than 20`);
console.log(myAge > 20 ? massage1() : massage2());
