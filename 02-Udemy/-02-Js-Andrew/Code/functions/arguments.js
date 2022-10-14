let add = function (a, b, c) {
  return a + b + c;
};
console.log(add(2, 3, 4));

//set default argument
let getScoreText = function (theName = "some one", score = 0) {
  return theName + "- Score :" + score;
};

console.log(getScoreText()); // some one- Score :0
console.log(getScoreText("eid")); // eid- Score :0
console.log(getScoreText("eid", 100)); // eid- Score :100
