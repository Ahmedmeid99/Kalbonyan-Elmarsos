////////////////////
const { MongoClient, ObjectID } = require("mongodb");
const id = new ObjectID();
console.log(id); // 6314a6eb6ab0e10d749265f2
console.log(id.id); // <Buffer 63 14 a6 eb 6a b0 e1 0d 74 92 65 f2>

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

    // console.log("connected correcttly");

    /////////////////////////////////////////////
    // Delete user
    const db = client.db(databaseName);
    const updataPromise = db
      .collection("tasks")
      .deleteOne({ description: "learn node" });

    updataPromise
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(`error: ${error}`);
      });

    /////////////////////////////////////////////
    // db.collection("tasks").insertMany(
    //   [
    //     { description: "learn node", completed: true },
    //     { description: "learn js", completed: true },
    //     { description: "learn bootstrap", completed: false },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert  documents!");
    //     }
    //     console.log(result.ops);
    //   }
    // );
  }
);

/*
 db.collection("users").insertMany(
      [
        { name: "ali", age: 13 },
        { name: "adel", age: 9 },
      ],
      (error, result) => {
        if (error) {
          return console.log("Unable to insert  documents!");
        }
        console.log(result.ops);
      }
    );
*/
