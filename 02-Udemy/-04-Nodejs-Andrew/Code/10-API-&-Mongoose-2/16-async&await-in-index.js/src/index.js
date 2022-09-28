const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Create user & end point (POST)
app.post("/users", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.send(user);
  } catch (e) {
    es.status(400).send(e);
  }
});

// Create task &  end point (POST)
app.post("/tasks", async (req, res) => {
  const task = new Task(req.body);
  try {
    await task.save();
    res.send(task);
  } catch (e) {
    res.status(400).send(e);
  }
  //  (use then & catch in promise)
  // task
  //   .save()
  //   .then(() => res.send(task))
  //   .catch((e) => {
  //     res.status(400);
  //     res.send(error);
  //   });
});

// Read users &  end point (GET)
app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(500).send(e);
  }
});

// Read users &  end point (GET)
app.get("/users/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findById(_id);
    res.send(user);
  } catch (e) {
    res.status(500).send(e);
  }
});
///////////////////////////////////////////////
//CHALLENGE (Read tasks)
///////////////////////////////////////////////
// Read all tasks
app.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.send(tasks);
  } catch (e) {
    re.status(400).send(e);
  }
});
// Read task by id
app.get("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    res.send(task);
  } catch (e) {
    re.status(400).send(e);
  }
  //(use then & catch in promise)
  // Task.findById(req.params.id)
  //   .then((task) => res.send(task))
  //   .catch(() => re.status(400).send());
});
///////////////////////////////////////////////
app.listen(port, () => {
  console.log(`server is up on port ${port}`);
});
