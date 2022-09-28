const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");

const app = express();
// const port = process.env.PORT || 3000;
const port = 3000;

app.use(express.json());
// create end point (POST) to add user
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

// create end point (POST) to add task
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

app.listen(port, () => {
  console.log(`server is up on port ${port}`);
});
