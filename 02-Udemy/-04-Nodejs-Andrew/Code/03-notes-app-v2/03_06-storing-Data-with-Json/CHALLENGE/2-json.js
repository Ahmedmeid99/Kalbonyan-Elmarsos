const fs = require("fs");
const andrew = {
  name: "Andrew",
  age: 32,
  skills: ["js", "react", "node", "java", "c++"],
};
//
// const jsonAndrew = JSON.stringify(andrew);
// fs.writeFileSync("2-json.json", jsonAndrew);
//

const ahmed = {
  name: "Ahmed",
  age: 23,
  skills: ["js", "react", "node"],
};

// const jsonAhmed = JSON.stringify(ahmed);

// fs.writeFileSync("2-json.json", jsonAhmed);
//
//
const getDataJson = fs.readFileSync("2-json.json");
const dataObject = JSON.parse(getDataJson);
console.log(dataObject);
console.log(
  `${dataObject.name} is ${dataObject.age} and have skills like ( ${dataObject.skills} )`
);
