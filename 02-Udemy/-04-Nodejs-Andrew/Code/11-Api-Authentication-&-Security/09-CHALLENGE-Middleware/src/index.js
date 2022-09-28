const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
// app.use((req, res, next) => {
//   console.log(req.method, req.path); // GET /users
//   next();
// });

// Middleware => CHALLENGE
// app.use((req, res, next) => {
//   if (
//     req.method === "GET" ||
//     req.method === "POST" ||
//     req.method === "PATCH" ||
//     req.method === "DELETE"
//   ) {
//     res.status(503).send("All requests are disabled");
//   } else {
//     next();
//   }
// });
// The Good Way To Solve => CHALLENGE
app.use((req, res, next) => {
  res.status(503).send("All requests are disabled");
});
app.use(express.json());

app.use(userRouter);
app.use(taskRouter);

///////////////////////////////////////////////
app.listen(port, () => {
  console.log(`server is up on port ${port}`);
});
