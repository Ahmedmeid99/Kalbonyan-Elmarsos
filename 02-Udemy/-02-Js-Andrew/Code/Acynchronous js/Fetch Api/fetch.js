////////////////////////
const wordCount = 2;
fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.puzzle);
  })
  .catch((error) => console.log(`This AN ERROR :${error}`));
