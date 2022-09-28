const chalk = require("chalk");
const yargs = require("yargs");

// console.log(process.argv);

// // node .\app.js add --title="Ahmed eid"
// console.log(yargs.argv); // [ 'add' ], title: 'Ahmed eid', '$0': 'app.js' }
// console.log(yargs.argv.title); // Ahmed eid

yargs.version("1.1.0");

yargs.command({
  command: "add",
  describe: "add an item to List",
  handler: function () {
    console.log("adding item");
  },
});

yargs.command({
  command: "remove",
  describe: "remove an item to List",
  handler: function () {
    console.log("removing item");
  },
});

console.log(yargs.argv);
// node .\app.js --help
/*
Commands:
  app.js add  add an item to List
*/

// node .\app.js add
/*
adding item
{ _: [ 'add' ], '$0': 'app.js' }
*/
