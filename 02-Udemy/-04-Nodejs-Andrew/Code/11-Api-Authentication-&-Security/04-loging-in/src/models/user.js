const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
// //Create Model
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: false,
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

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Unable to login");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Unable to login");
  }
  return user;
};

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});
const User = mongoose.model("User", userSchema);

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
