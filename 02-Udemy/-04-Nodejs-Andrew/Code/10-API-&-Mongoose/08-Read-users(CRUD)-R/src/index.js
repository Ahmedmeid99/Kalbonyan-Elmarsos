const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Create user & end point (POST)
app.post("/users", (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then(() => res.send(user))
    .catch((e) => {
      res.status(400);
      res.send(error);
    });
});

// Create task &  end point (POST)
app.post("/tasks", (req, res) => {
  const task = new Task(req.body);
  task
    .save()
    .then(() => res.send(task))
    .catch((e) => {
      res.status(400);
      res.send(error);
    });
});

// Read users &  end point (GET)
app.get("/users", (req, res) => {
  User.find({})
    .then((users) => res.send(users))
    .catch(() => res.status(500).send());
});

// Read users &  end point (GET)
app.get("/users/:id", (req, res) => {
  const _id = req.params.id;
  User.findById(_id)
    .then((user) => res.send(user))
    .catch(() => res.status(500).send());
});

app.listen(port, () => {
  console.log(`server is up on port ${port}`);
});
