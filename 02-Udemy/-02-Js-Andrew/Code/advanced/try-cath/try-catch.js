"use strict"
const name = 'A'
if (name === 'A'){
  age =23
}
console.log(age) // error

const add = (num1, num2) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    throw Error("you mast use only numbers");
    // console.log("you mast use only numbers");
  }
};
// console.log(add(10, 2)); // 12
// console.log(add(10, "2")); // 12
try {
  const result = add(10, "2"); // 12
  console.log(result);
} catch (error) {
  console.log("error");
}

