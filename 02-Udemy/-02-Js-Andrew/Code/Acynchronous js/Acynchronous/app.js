// /////////////////////////////////////
// // Acynchronous
getPuzzle((error, puzzle) => {
  if (error) {
    console.log(`Error : ${error}`);
  } else {
    console.log(puzzle);
  }
});
