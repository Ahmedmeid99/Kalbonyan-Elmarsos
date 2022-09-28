const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";
MongoClient.connect(
  connectionURL,
  //   { useNewUrlParser: true },
  { useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }

    console.log("connected correcttly");

    const db = client.db(databaseName);
    db.collection("users").insertOne({
      name: "Ahmed",
      age: 23,
    });
    db.collection("users").insertOne({
      name: "Eid",
      age: 20,
    });
  }
);
