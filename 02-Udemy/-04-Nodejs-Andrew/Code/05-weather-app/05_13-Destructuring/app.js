const myName = "ahmed";
const age = 23;
const jopTitle = "front-end";

const admin = {
  myName,
  age,
  jopTitle,
  fav: ["react", "node", "js"],
};
console.log(admin);

///////////////////////////////
const skills = {
  React: "80%",
  NodeJs: "20%",
  Js: "80%",
};
const { React, Js, NodeJs } = skills;
console.log(
  "React" + ": " + React,
  "React" + ": " + Js,
  "NodeJs" + ": " + NodeJs
);
///////////////////////////////
