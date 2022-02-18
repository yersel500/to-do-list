// class for array of objects
export default class ArrayTask {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks = [...this.tasks, task];
  }

  editTask(updatedTask) {
    this.tasks = this.tasks.map((task) => (task.index === updatedTask.index ? updatedTask : task));
  }

  deleteTask(index) {
    this.tasks = this.tasks.filter((task) => task.index !== index);
  }

  deleteCompletedTask() {
    this.tasks = this.tasks.filter((task) => task.complete === false);
  }

  saveLocalStorage() {
    localStorage.setItem('myTasks', JSON.stringify(this.tasks));
  }
}