class Hungman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split(""); // 'c' , 'a' ,'r'
    this.remainingGuesses = remainingGuesses;
    this.guessedLetter = [];
    this.status = "playing";
  }
  calculateStatus() {
    const finished = this.word.every(
      (letter) => this.guessedLetter.includes(letter) || letter === " "
    );
    // 3 status
    if (this.remainingGuesses === 0) {
      this.status = "failed";
    } else if (finished) {
      this.status = "finished";
    } else {
      this.status = "playing";
    }
  }
  get getStatusMaessage() {
    if (this.status === "playing") {
      return `Guesses left: ${this.remainingGuesses}`;
    } else if (this.status === "failed") {
      guessesEl.style.cssText = "color: red;";
      return `Nice try! The word was "${this.word.join("")}".`;
    } else {
      guessesEl.style.cssText = "color: #02bd02;";
      return `Greate work! You guessed the work `;
    }
  }
  // Create Gusess Mothod
  makeGuess(guess) {
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
  }
  // Create getPuzzle Mothod
  get getPuzzle() {
    let puzzle = "";
    this.word.forEach((letter) => {
      if (this.guessedLetter.includes(letter) || letter === " ") {
        puzzle += letter;
      } else {
        puzzle += "*";
      }
    });
    return puzzle;
  }
}
