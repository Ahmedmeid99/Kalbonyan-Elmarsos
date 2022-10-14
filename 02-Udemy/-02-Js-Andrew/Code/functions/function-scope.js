let fahrenheitToCelsius = function (fahr) {
  let celsius = ((fahr - 32) * 5) / 9;
  if (celsius <= 0) {
    let freezing = true;
  }
  return celsius;
};

console.log(fahrenheitToCelsius(32)); // 0
console.log(fahrenheitToCelsius(68)); // 20
