const chalk = require("chalk");
const yargs = require("yargs");

const allMethods = require("./notes");

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
    allMethods.addNotes(argv.title, argv.body);
  },
});

//node .\app.js add --title='ahmed'
// item's title is ahmed
yargs.parse();
