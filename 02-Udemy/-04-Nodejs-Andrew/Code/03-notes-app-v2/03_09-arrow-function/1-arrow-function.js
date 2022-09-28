///////////////////////////////////////
const adding = function (a, b) {
  return a + b;
};
console.log(adding(2, 3)); // 5

///////////////////////////////////////
const adding2 = (a, b) => {
  return a + b;
};
console.log(adding2(2, 3)); // 5

///////////////////////////////////////
const adding3 = (a, b) => a + b;

console.log(adding3(2, 3)); // 5

///////////////////////////////////////
const learnning = {
  name: "learn programing",
  skills: ["js", "react", "node"],
  getMethod: function () {
    console.log(this.name);
  },
};
learnning.getMethod(); // learn programing
///////////////////////////////////////
const learnning2 = {
  name: "learn programing",
  skills: ["js", "react", "node"],
  getMethod: () => {
    console.log(this.name);
  },
};
learnning2.getMethod(); // undefined
///////////////////////////////////////
const learnning3 = {
  name: "learn programing",
  skills: ["js", "react", "node"],
  getMethod() {
    console.log(this.name);
  },
};
learnning3.getMethod(); // learn programing
///////////////////////////////////////
const learnning4 = {
  name: "learn programing",
  skills: ["js", "react", "node"],
  getMethod() {
    console.log(this.name);
    this.skills.forEach((skill) =>
      console.log(`I ${this.name} and finished ${skill}`)
    );
  },
};
learnning4.getMethod();
/*
// learn programing
I learn programing and finished js
I learn programing and finished react
I learn programing and finished node
*/
///////////////////////////////////////
