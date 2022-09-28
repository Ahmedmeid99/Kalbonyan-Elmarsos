require("../src/db/mongoose");

const Task = require("../src/models/task");

// Task.findByIdAndDelete("6315df923d659eaf32d8b5fe")
//   .then((task) => {
//     console.log(task); // update the user age withing his id
//     return Task.countDocuments({ completed: true }); // get the count of users they have age = 11
//   })
//   .then((result) => console.log(result))
//   .catch((e) => console.log(e));

const deleteTaskById = async (id) => {
  const deletedTask = await Task.findByIdAndDelete(id);
  const completedTasksCount = await Task.countDocuments({ completed: true });
  return completedTasksCount;
};
deleteTaskById("6319d75ea34b48d0555f1bb7")
  .then((count) => console.log(count))
  .catch((e) => console.log(e));
