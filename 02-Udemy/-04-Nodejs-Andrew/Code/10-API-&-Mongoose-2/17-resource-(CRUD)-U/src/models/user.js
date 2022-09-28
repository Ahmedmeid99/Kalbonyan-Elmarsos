const mongoose = require("mongoose");
const validator = require("validator");
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
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 6,
    maxlength: 20,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error('you can not use this word in password "password"');
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
// const me = new User({
//   name: "  Eid",
//   email: "  AHMED@gmail.com",
//   age: 20,
//   password: "eid199963_-_!",
// });
// me.save()
//   .then(() => console.log(me))
//   .catch((error) => console.log(`Error: ${error}`));

module.exports = User;
