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
    // find Task by _id
    const db = client.db(databaseName);
    db.collection("tasks").findOne(
      { _id: new ObjectID("63149596d386f3222c5a141c") },
      (error, task) => {
        if (error) {
          return console.log("dont found task");
        }

        console.log(task); // { _id: 63149596d386f3222c5a141c, description: 'learn bootstrap', completed: false}
      }
    );
    /////////////////////////////////////////////
    // find all
    db.collection("tasks")
      .find()
      .toArray((error, task) => {
        if (error) {
          return console.log("dont found task");
        }

        console.log(task);
      });
    /*
    [
      { _id: 63149596d386f3222c5a141a, description: 'learn node',completed: true},
      {id: 63149596d386f3222c5a141b, description: 'learn js',completed: true},
      { _id: 63149596d386f3222c5a141c,description: 'learn bootstrap',completed: false}
    ]
      */
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
