const express = require("express");
const path = require("path");

const app = express(); //save express function in an (app) variable

// app.com
// app.com/help
// app.com/about
// app.com/weather

const publicDirPath = path.join(__dirname, "../public");
console.log(publicDirPath);

app.use(express.static(publicDirPath)); //weather htmlpage

app.get("/weather", (req, res) => {
  res.send({
    forecast: { long: "-40", lat: "30" },
    geocode: "egypt",
  });
});

app.listen(3000, () => {
  console.log("server is up on port 3000");
});
