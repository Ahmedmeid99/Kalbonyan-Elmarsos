const fs = require("fs");

// writeFileSync to create file and add some text or override the content of this file

// appendFileSync to add some text to file useing the path of this file

fs.appendFileSync(
  "../02-01-start-with-FS/notes.text",
  " and I learn Node now :>"
); //my name is Ahmed and I learn Node now :>
