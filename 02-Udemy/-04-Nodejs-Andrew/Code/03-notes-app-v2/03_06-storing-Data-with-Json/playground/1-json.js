const fs = require("fs");

const note = {
  title: "learn node",
  body: "learn node is easy but need more work on it , after finishing it I will be suber front-end developer and full stack developer (MERN)",
};

// const jsonNote = JSON.stringify(note);
// console.log(jsonNote);

// fs.writeFileSync("1-json.json", jsonNote); //create file and add json data to it

const dataBuffer = fs.readFileSync("1-json.json"); //read file and get json data from it

console.log(JSON.parse(dataJson).title); //json => object

// const parsNote = JSON.parse(jsonNote);
// console.log(parsNote);

// console.log(parsNote.title); //learn node
