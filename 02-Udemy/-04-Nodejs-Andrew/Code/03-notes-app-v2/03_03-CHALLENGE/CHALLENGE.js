const chalk = require("chalk");
const yargs = require("yargs");

yargs.command({
  command: "list",
  describe: "list of notes",
  handler: function () {
    console.log("storing list of notes");
  },
});

yargs.command({
  command: "read",
  describe: "show list of notes",
  handler: function () {
    console.log("showing list of notes");
  },
});
//  node .\CHALLENGE.js --help
console.log(yargs.argv);

// console.log(chalk.bold.green("...Good Work..."));
console.log(chalk.bold.green.inverse("...Good Work..."));
