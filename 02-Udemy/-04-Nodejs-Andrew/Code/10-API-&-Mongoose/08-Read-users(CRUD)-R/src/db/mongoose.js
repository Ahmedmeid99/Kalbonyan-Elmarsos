const mongoose = require("mongoose");

///////////////////////////////////////////////////
// mongoose.connect('mongodb:localgost:port/databaseName')
mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  //   useNewUrlParser: true,
  //   useCreateIndex: true,
});

/*
 * C:/Users/Ezz/mongodb/bin/mongod.exe --dbpath C:/Users/Ezz/mongodb-data
 *
 */
