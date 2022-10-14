// // use argument (keyword)
// const add = function () {
//   return arguments;
// };
// console.log(add(12, 23, 4, 5, 6, 78)); // { '0': 12, '1': 23, '2': 4, '3': 5, '4': 6, '5': 78 }

///////////////////////////////////
const add = function () {
  return arguments[0] + arguments[1] + arguments[2];
};
console.log(add(12, 23, 4, 5, 6, 78)); // 39

///////////////////////////////////
// arrow function not work in this case
const car = {
  color: "red",
  name: "car112",
  getName: function () {
    return `${this.name} ${this.color}`;
  },
};
console.log(car.getName());
