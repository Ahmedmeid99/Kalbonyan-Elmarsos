const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");
puzzleEl.textContent = game1.getPuzzle;
guessesEl.textContent = game1.getStatusMaessage;

window.addEventListener("keypress", function (e) {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);

  puzzleEl.textContent = game1.getPuzzle;
  guessesEl.textContent = game1.getStatusMaessage;
});

getPuzzle("3", (error, puzzle) => {
  if (error) {
    console.log(`Error : ${error}`);
  } else {
    console.log(puzzle);
  }
});
getCountryName("EG", (error, country) => {
  if (error) {
    console.log(`Error : ${error}`);
  } else {
    console.log(country);
  }
});
