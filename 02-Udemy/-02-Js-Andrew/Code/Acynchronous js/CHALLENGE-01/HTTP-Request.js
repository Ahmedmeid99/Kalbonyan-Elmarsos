const request = new XMLHttpRequest();
request.open("GET", "https://puzzle.mead.io/puzzle?wordCount=2");
request.send();

request.addEventListener("readystatechange", (e) => {
  if (e.target.readyState === 4) {
    const data = JSON.parse(e.target.responseText);
    console.log(data.puzzle);
  }
});
