const mongoose = require("mongoose");

///////////////////////////////////////////////////
// mongoose.connect('mongodb:localgost:port/databaseName')
mongoose.connect(process.env.MONGODB_URL, {
  //   useNewUrlParser: true,
  //   useCreateIndex: true,
});

/*
 * C:/Users/Ezz/mongodb/bin/mongod.exe --dbpath C:/Users/Ezz/mongodb-data
 *
 */
