const Hungman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split(""); // 'c' , 'a' ,'r'
    this.remainingGuesses = remainingGuesses;
    this.guessedLetter = [];
  };
  // Create Gusess Mothod
  Hungman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase();
    const isUnique = !this.guessedLetter.includes(guess);
    const isBadGuess = !this.word.includes(guess);
    if (isUnique) {
      this.guessedLetter.push(guess);
    }
    if (isUnique && isBadGuess) {
      this.remainingGuesses--;
    }
  };
  const game1 = new Hungman("car", 2);
  const game2 = new Hungman("cairo city", 4);
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
  game1.makeGuess("c");
  game1.makeGuess("w");
  game1.makeGuess("r");
  console.log(game1.remainingGuesses); // 1
  
  console.log(game1.getPuzzle()); // c*r
  game2.makeGuess("o");
  console.log(game2.getPuzzle()); // ****o c***
  console.log(game1); // Hungman { word: 'car', remainingGuesses: 2 }
  console.log(game2); // Hungman { word: 'cairo', remainingGuesses: 4 }
  
  //// my code
  // Create Gusess Mothod
  // Hungman.prototype.makeGuess = function (someLetters) {
  //   this.guessedLetter = someLetters.toLowerCase().split("");
  //   return this.guessedLetter;
  // };
  