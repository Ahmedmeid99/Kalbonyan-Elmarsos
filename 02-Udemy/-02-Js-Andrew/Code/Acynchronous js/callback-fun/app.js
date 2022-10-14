post("Ahmed");

crossMassege((massage) => {
  console.log(massage);
});

// /////////////////////////////////////
// // Acynchronous
getPuzzle((error, puzzle) => {
  if (error) {
    console.log(`Error : ${error}`);
  } else {
    console.log(puzzle);
  }
});
