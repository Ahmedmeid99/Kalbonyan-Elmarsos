////////////////////
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";
MongoClient.connect(
  connectionURL,
  { useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }

    // console.log("connected correcttly");

    const db = client.db(databaseName);
    db.collection("tasks").insertMany(
      [
        { description: "learn node", completed: true },
        { description: "learn js", completed: true },
        { description: "learn bootstrap", completed: false },
      ],
      (error, result) => {
        if (error) {
          return console.log("Unable to insert  documents!");
        }
        console.log(result.ops);
      }
    );
  }
);
