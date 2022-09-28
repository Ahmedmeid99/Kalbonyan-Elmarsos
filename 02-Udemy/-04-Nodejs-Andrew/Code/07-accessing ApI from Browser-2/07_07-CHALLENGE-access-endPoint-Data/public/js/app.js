console.log("Client side javascript file is loaded!");
fetch("http://puzzle.mead.io/puzzle")
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data));

fetch("http://localhost:3000/weather?address=Los%20Angeles")
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data));
