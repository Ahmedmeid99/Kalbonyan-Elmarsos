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
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("item's title is " + argv.title);
    console.log("item's body is " + argv.body);
  },
});

//node .\app.js add --title='ahmed' --body='learn node is super importent'
// item's title is ahmed
// item's body is learn node is super importent

yargs.parse(); // better than console.log(yargs.argv[3])

console.log(chalk.bold.green.inverse("...Good Work..."));
console.log(chalk.bold.blue.inverse("...Good Work..."));
