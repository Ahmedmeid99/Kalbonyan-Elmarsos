const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");

let game1;
window.addEventListener("keypress", function (e) {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);

  render();
});
const render = () => {
  puzzleEl.innerHTML = "";
  guessesEl.textContent = game1.getStatusMaessage;

  game1.getPuzzle.split("").forEach((letter) => {
    const letterEl = document.createElement("span");
    letterEl.textContent = letter;
    puzzleEl.appendChild(letterEl);
  });
};
const startGame = async () => {
  const puzzle = await getPuzzle(2);
  game1 = new Hungman(puzzle, 7);
  render();
};
document.querySelector("#reset").addEventListener("click", () => {
  startGame();
  guessesEl.style.cssText = "color: #fafafa;";
});
startGame();
