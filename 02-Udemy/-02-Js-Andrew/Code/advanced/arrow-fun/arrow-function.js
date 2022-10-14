// const add = function (num1, num2) {
//   return num1 + num2;
// };
// console.log(add(12, 8)); // 20

// arrow function
const add = (num1, num2) => num1 + num2;
console.log(add(12, 8)); // 20

const pepole = [
  { name: "Ahmed", age: 23 },
  { name: "Eid", age: 20 },
  { name: "Ali", age: 12 },
];

const under22 = pepole.filter((person) => person.age < 22);
console.log(under22); // [ { name: 'Eid', age: 20 }, { name: 'Ali', age: 12 } ]
