// /////////////////////////////////////
// // Acynchronous
const getPuzzle = function (callback) {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText);
      callback(undefined, data.puzzle);
    } else if (e.target.readyState === 4) {
      callback("An error has taken place", undefined);
    }
  });
  request.open("GET", "https://puzzle.mead.io/puzzle?wordCount=2");
  request.send();
};

const crossMassege = function (callback) {
  callback(`this is callback function : ${callback}`);
};
/*
this is callback function : (massage) => {
  console.log(massage);
}
*/
