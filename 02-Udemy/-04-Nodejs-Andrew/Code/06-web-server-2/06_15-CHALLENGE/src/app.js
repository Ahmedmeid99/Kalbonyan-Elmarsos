const hbs = require("hbs");
const express = require("express");
const path = require("path");

const app = express(); //save express function in an (app) variable

// app.com
// app.com/help
// app.com/about
// app.com/weather

// Define paths for Express config
const publicDirPath = path.join(__dirname, "../public");
const views = path.join(__dirname, "../template/views");
const partials = path.join(__dirname, "../template/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", views);
hbs.registerPartials(partials);

// Setup static directory to serve
app.use(express.static(publicDirPath));

// app.com
app.get("/", (req, res) => {
  res.render("index", { title: "Ahmed", name: "Ahmed Eid" });
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
    title: "help",
    name: "Ahmed eid Ali",
    info: "Ahmed-eid.com",
  });
});

// app.get("/help/*", (req, res) => {
//   res.send("Not Found Articae in help page");
// });

app.get("/help/*", (req, res) => {
  res.render("404_page", { errorMessage: "Help article not found" });
});

// app.get("*", (req, res) => {
//   res.send("This Page Not Found");
// });

app.get("*", (req, res) => {
  res.render("404_page", { errorMessage: "Page not found" });
});

app.listen(3000, () => {
  console.log("server is up on port 3000");
});
