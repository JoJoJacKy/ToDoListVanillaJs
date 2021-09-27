class Project {
  constructor(title) {
    this.title = title;
    this.tasks = [];
  }

  getTitle() {
    return this.title;
  }

  setTitle(title) {
    this.title = title;
  }

  getTasks() {
    return this.tasks;
  }

  findTask(taskName) {
    return this.tasks.find((task) => task.getName() === taskName);
  }

  addTask(task) {
    this.tasks.push(task);
  }

  deleteTask(taskName) {
    this.tasks = this.tasks.filter((task) => task.name !== taskName);
  }

  updateTask(currentTask, newTaskName, newTaskDesc, newTaskPriority) {
    const task = this.tasks.find(
      (task) => task.getName() === currentTask.getName()
    );
    this.deleteTask(currentTask.getName());
    task.setName(newTaskName);
    task.setDescription(newTaskDesc);
    task.setPriority(newTaskPriority);
    this.tasks.push(task);
  }
}

export default Project;
