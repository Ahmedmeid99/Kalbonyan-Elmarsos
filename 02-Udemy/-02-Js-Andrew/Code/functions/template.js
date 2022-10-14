/////////////////////
// TEMPLATE STRING
/////////////////////
let getScoreText = function (theName = "some one", score = 0) {
  return `${theName} - Score : ${score}`;
};

console.log(getScoreText("eid", 100)); // eid- Score :100
