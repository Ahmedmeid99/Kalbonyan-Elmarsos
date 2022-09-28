require("../src/db/mongoose");

const User = require("../src/models/user");

User.findByIdAndUpdate("6315d9468890a5cb43edf50f", { age: 11 })
  .then((user) => {
    console.log(user); // update the user age withing his id
    return User.countDocuments({ age: 11 }); // get the count of users they have age = 11
  })
  .then((result) => console.log(result))
  .catch((e) => console.log(e));
