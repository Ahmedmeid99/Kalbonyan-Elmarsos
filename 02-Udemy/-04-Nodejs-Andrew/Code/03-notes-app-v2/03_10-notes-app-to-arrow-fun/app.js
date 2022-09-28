const yargs = require("yargs");
const allMethods = require("./notes");

// add command
yargs.command({
  command: "add",
  describe: "add one note to List",
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
  handler(argv) {
    allMethods.addNotes(argv.title, argv.body);
  },
});

// remove command
yargs.command({
  command: "remove",
  describe: "remove one note from notes",
  builder: {
    title: { describe: "Note Title", demandOption: true, type: "string" },
  },
  handler(argv) {
    allMethods.removeNote(argv.title);
  },
});

//node .\app.js add --title='ahmed'
// item's title is ahmed
yargs.parse();
