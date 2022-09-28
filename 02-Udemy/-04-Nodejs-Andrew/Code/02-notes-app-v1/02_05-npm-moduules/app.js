const validator = require("validator");

console.log(validator.isEmail("ahmed@gmail.com")); // true
console.log(validator.isEmail("ahmed.com")); // false
console.log(validator.isURL("https://ahmed@gmail.com")); // true
console.log(validator.isURL("ahmedEid.com")); // true
console.log(validator.isURL("ahmed@gmail")); //false
