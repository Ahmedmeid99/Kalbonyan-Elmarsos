const express = require("express");
const path = require("path");

const app = express(); //save express function in an (app) variable

// app.com
// app.com/help
// app.com/about
// app.com/weather

const publicDirPath = path.join(__dirname, "../public");
console.log(publicDirPath);

app.use(express.static(publicDirPath));

// app.get("/", (req, res) => {
//   res.send(`<h1>Home page<h1>`);
// });

app.get("/help", (req, res) => {
  res.send("HELP PAGE :>");
});

const temlate = `
    <div>
        <h3>ABOUT PAGE</h3>
        <p>my name is ahmed eid front-end developer and naw learn Node.js to ge MERN stack developer</p>
    </div>
`;
app.get("/about", (req, res) => {
  res.send(temlate);
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: { long: "-40", lat: "30" },
    geocode: "egypt",
  });
});

app.listen(3000, () => {
  console.log("server is up on port 3000");
});
