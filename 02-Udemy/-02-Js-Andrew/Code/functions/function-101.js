let greatUser = function () {
  console.log("hello user");
};
greatUser();
greatUser();
greatUser();

let square = function (num) {
  let result = num * num;
  return result;
};

let value = square(2);
let otherValue = square(4);
console.log(value); // 4
console.log(otherValue); //16

////////////////////////////
//CHALLENGE
////////////////////////////
let fahrenheitToCelsius = function (fahr) {
  let celsius = ((fahr - 32) * 5) / 9;
  return celsius;
};

console.log(fahrenheitToCelsius(32)); // 0
