const chalk = require("chalk");

const command = process.argv[2];
/*
/1-process.argv[2] => to add input (node .\app.js add )
/2-
*/
if (command) {
  console.log("you intered input with command");
}
if (command === "add") {
  console.log("Adding note!");
} else if (command === "remove") {
  console.log("Removing note!");
}
console.log(command);
console.log(process.argv);
// node .\app.js add --title="Ahmed eid"
console.log(process.argv[3].split("=")[1]); // Ahmed eid
