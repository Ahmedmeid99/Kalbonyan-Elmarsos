const express = require("express");
const path = require("path");

const app = express(); //save express function in an (app) variable

// app.com
// app.com/help
// app.com/about
// app.com/weather

const publicDirPath = path.join(__dirname, "../public");
console.log(publicDirPath);

app.set("view engine", "hbs");
app.use(express.static(publicDirPath)); //weather htmlpage

// app.com
app.get("/", (req, res) => {
  res.render("index", { title: "Ahmed" });
});

// app.com/about
app.get("/about", (req, res) => {
  res.render("about", {
    title: "about me",
    name: "Ahmed Eid",
  });
});

// app.com/help
app.get("/help", (req, res) => {
  res.render("help", {
    name: "Ahmed eid Ali",
    info: "Ahmed-eid.com",
  });
});
app.listen(3000, () => {
  console.log("server is up on port 3000");
});
