/*-------------[1]-------------*/
// require("./utils");

// console.log("from => app.js");
// /*
// from => utils.js
// from => app.js
// */

/*-------------[2]-------------*/
// const name = require("./utils");
// console.log(name); // Ahmed

/*-------------[3]-------------*/
const adding = require("./utils");
const sum = adding(2, 3);
console.log(sum);
