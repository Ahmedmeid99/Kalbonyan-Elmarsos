let num = 103.72323278097;

console.log(num.toFixed(2)); // 103.72
console.log(num.toFixed(10)); // 103.7232327810

console.log(Math.round(num)); // 104
console.log(Math.floor(num)); // 103
console.log(Math.ceil(num)); // 104

/////////////////////////////
// create a random value
/////////////////////////////

// Math.random() > 0 < 1
let min = 10;
let max = 20;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min; // 10 11 12 13 14 15 16 17 18 19 20
console.log(randomNum);
