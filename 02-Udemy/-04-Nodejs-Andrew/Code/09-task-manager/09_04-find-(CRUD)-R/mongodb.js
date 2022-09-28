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
    // findOne by name
    const db = client.db(databaseName);
    db.collection("users").findOne({ name: "Ali" }, (error, user) => {
      if (error) {
        return console.log("error: can not find user");
      }
      console.log(user); // { _id: 6314c561bea2002298e7d5aa, name: 'Ali', age: 13 }
    });

    /////////////////////////////////////////////
    // findOne by _id
    db.collection("users").findOne(
      { _id: new ObjectID("6314c561bea2002298e7d5aa") },
      (error, user) => {
        if (error) {
          return console.log("error: can not find user");
        }
        console.log(user); // { _id: 6314c561bea2002298e7d5aa, name: 'Ali', age: 13 }
      }
    );
    /////////////////////////////////////////////
    // find all by name
    db.collection("users")
      .find({ name: "Ali" })
      .toArray((error, users) => {
        if (error) {
          return console.log("error: can not find user");
        }
        console.log(users); // [ { _id: 6314c561bea2002298e7d5aa, name: 'Ali', age: 13 }
      });

    /////////////////////////////////////////////
    // find count
    db.collection("users")
      .find({ name: "Ahmed" })
      .count((error, count) => {
        if (error) {
          return console.log("error: can not find user");
        }
        console.log(count); // 11
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
