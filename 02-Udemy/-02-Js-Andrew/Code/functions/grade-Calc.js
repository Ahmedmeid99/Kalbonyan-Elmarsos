/////////////////////
// CHALENGE
/////////////////////
let mark;
let getResult = function (score, max) {
  let result = (score / max) * 100;
  if (result <= 100 && result >= 90) {
    mark = "A";
  } else if (result <= 89 && result >= 80) {
    mark = "B";
  } else if (result <= 79 && result >= 70) {
    mark = "C";
  } else if (result <= 69 && result >= 60) {
    mark = "D";
  } else {
    mark = "f";
  }
  return `you get a ${mark} (${result}%)`;
};
console.log(getResult(15, 20)); // you get a C (75%)
