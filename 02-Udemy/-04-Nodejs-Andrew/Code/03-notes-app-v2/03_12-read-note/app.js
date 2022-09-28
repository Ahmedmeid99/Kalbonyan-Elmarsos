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
// list command
yargs.command({
  command: "list",
  describe: "show list of notes",
  handler(argv) {
    allMethods.listNote();
  },
});

// list command
yargs.command({
  command: "read",
  describe: "show the title and the body of note useing title",
  builder: {
    title: { describe: "Note Title", demandOption: true, type: "string" },
  },
  handler(argv) {
    allMethods.readNote(argv.title);
  },
});
//node .\app.js add --title='ahmed'
// item's title is ahmed
yargs.parse();
