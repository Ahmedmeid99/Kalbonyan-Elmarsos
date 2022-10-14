/////////////////////////////////////
// cynchronous
const getPuzzle = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "https://puzzle.mead.io/puzzle?wordCount=2", false);
  request.send();

  if (request.readyState === 4 && request.status === 200) {
    const data = JSON.parse(request.responseText);
    return data.puzzle;
  } else if (request.readyState === 4) {
    throw new Error("An error has taken place");
  }
};
