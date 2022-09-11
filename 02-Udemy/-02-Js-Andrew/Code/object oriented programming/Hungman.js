const Hungman = function (word, remainingGuesses) {
  this.word = word;
  this.remainingGuesses = remainingGuesses;
};
const game1 = new Hungman("car", 2);
const game2 = new Hungman("cairo", 4);
console.log(game1); // Hungman { word: 'car', remainingGuesses: 2 }
console.log(game2); // Hungman { word: 'cairo', remainingGuesses: 4 }
