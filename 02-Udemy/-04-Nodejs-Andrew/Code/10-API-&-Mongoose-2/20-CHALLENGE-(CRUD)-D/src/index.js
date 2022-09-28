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

// Update user by id
app.patch("/users/:id", async (req, res) => {
  // handle update key (is not defind)
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "email", "password", "age"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.send(400).send({ error: "Invalid updates!" });
  }
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

// delete user by id
app.delete("/users/:id", async (req, res) => {
  // handle update key (is not defind)
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (e) {
    res.status(400).send(e);
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
});

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
});

// Update user by id
app.patch("/tasks/:id", async (req, res) => {
  // handle update key (is not defind)
  const updates = Object.keys(req.body);
  const allowedUpdates = ["description", "completed"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.send(400).send({ error: "Invalid updates!" });
  }
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (e) {
    res.status(400).send(e);
  }
});

// delete task by id
app.delete("/tasks/:id", async (req, res) => {
  // handle update key (is not defind)
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (e) {
    res.status(400).send(e);
  }
});
///////////////////////////////////////////////
app.listen(port, () => {
  console.log(`server is up on port ${port}`);
});
