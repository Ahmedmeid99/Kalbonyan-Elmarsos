const mongoose = require("mongoose");

///////////////////////////////////////////////////
// mongoose.connect('mongodb:localgost:port/databaseName')
mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  //   useNewUrlParser: true,
  //   useCreateIndex: true,
});

//Create Model
const User = mongoose.model("User", {
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

// Create New User
const me = new User({ name: "Ahmed", age: 23 });
me.save()
  .then(() => console.log(me))
  .catch((error) => console.log(`Error: ${error}`));
/*
 * C:/Users/Ezz/mongodb/bin/mongod.exe --dbpath C:/Users/Ezz/mongodb-data
 *
 */
