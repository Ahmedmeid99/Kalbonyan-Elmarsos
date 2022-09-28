const chalk = require("chalk");

console.log(chalk.green("Good Work")); // add color
console.log(chalk.bgGreen("Good Work")); // add background color
console.log(chalk.red("Bad Work"));
console.log(chalk.hex("#ff0000").bold("Bold gray!")); // add color useing hex + bold=
console.log(chalk.rgb(123, 45, 67).underline("Underlined reddish color")); // add underline + add color useing rgb

console.log(chalk.bold.bgGreen("hello colors"));

console.log(chalk.bold.green("hello colors"));
console.log(chalk.bold.green.inverse("hello colors"));
