const mongoose = require("mongoose");
const validator = require("validator");

///////////////////////////////////////////////////
// mongoose.connect('mongodb:localgost:port/databaseName')
mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  //   useNewUrlParser: true,
  //   useCreateIndex: true,
});

// //Create Model
const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw Error("Email is not valid");
      }
    },
  },
  age: {
    type: Number,
    trim: true,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw Error("Age is not valid");
      }
    },
  },
});

// // Create New User
const me = new User({ name: "  Eid", email: "  AHMED@gmail.com" });
me.save()
  .then(() => console.log(me))
  .catch((error) => console.log(`Error: ${error}`));

//Create Model
// const Task = mongoose.model("Task", {
//   description: {
//     type: String,
//   },
//   completed: {
//     type: Boolean,
//   },
// });

// const firstTask = new Task({
//   description: "learn node.js",
//   completed: true,
// });

// firstTask
//   .save()
//   .then((task) => console.log(task))
//   .catch((error) => {
//     console.log("error:" + " " + error);
//   });

/*
 * C:/Users/Ezz/mongodb/bin/mongod.exe --dbpath C:/Users/Ezz/mongodb-data
 *
 */
