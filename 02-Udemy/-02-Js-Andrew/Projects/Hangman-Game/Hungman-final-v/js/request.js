//////////////////////////////////////////
// Async Await patteren 04
const getPuzzle = async (wordCount) => {
  const request = await fetch(
    `//puzzle.mead.io/puzzle?wordCount=${wordCount}`
  );
  if (request.status == 200) {
    const data = await request.json();
    return data.puzzle;
  } else {
    throw new Error("ERROR :=> ");
  }
};
