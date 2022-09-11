const Hungman = function (word, remainingGuesses) {
  this.word = word.toLowerCase().split(""); // 'c' , 'a' ,'r'
  this.remainingGuesses = remainingGuesses;
  this.guessedLetter = [];
  this.status = "playing";
};

Hungman.prototype.calculateStatus = function () {
  /* 01 */
  const finished = this.word.every((letter) =>
    this.guessedLetter.includes(letter)
  );
  /* 02 */
  // const letterUnguessed = this.word.filter((letter) => {
  //   return !this.guessedLetter.includes(letter);
  // });
  // const finished = letterUnguessed.length === 0;
  /* 03 */
  //check if finished or not
  // let finished = true;
  // this.word.forEach((letter) => {
  //   if (this.guessedLetter.includes(letter)) {
  //     finished = true;
  //   } else {
  //     finished = false;
  //   }
  // });
  // 3 status
  if (this.remainingGuesses === 0) {
    this.status = "failed";
  } else if (finished) {
    this.status = "finished";
  } else {
    this.status = "playing";
  }
};

Hungman.prototype.getStatusMaessage = function () {
  if (this.status === "playing") {
    return `Guesses left: ${this.remainingGuesses}`;
  } else if (this.status === "failed") {
    return `Nice try! The word was "${this.word.join("")}".`;
  } else {
    return `Greate work! You guessed the work`;
  }
};

// Create Gusess Mothod
Hungman.prototype.makeGuess = function (guess) {
  guess = guess.toLowerCase();
  const isUnique = !this.guessedLetter.includes(guess);
  const isBadGuess = !this.word.includes(guess);
  if (this.status !== "playing") {
    return;
  }
  if (isUnique) {
    this.guessedLetter.push(guess);
  }
  if (isUnique && isBadGuess) {
    this.remainingGuesses--;
  }
  this.calculateStatus();
};

// Create getPuzzle Mothod
Hungman.prototype.getPuzzle = function () {
  let puzzle = "";
  this.word.forEach((letter) => {
    if (this.guessedLetter.includes(letter) || letter === " ") {
      puzzle += letter;
    } else {
      puzzle += "*";
    }
  });
  return puzzle;
};
const game1 = new Hungman("car", 2);
