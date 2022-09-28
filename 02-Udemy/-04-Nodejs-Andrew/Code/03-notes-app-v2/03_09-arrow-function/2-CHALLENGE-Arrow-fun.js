const tasks = {
  tasks: [
    { text: "learn C++", completed: false },
    { text: "learn React", completed: true },
    { text: "learn Node", completed: false },
    { text: "learn js", completed: true },
  ],
  getCompletedTasks() {
    return this.tasks.filter((task) => task.completed === false);
  },
};

console.log(tasks.getCompletedTasks());
