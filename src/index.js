import './style.css';
import '@fortawesome/fontawesome-free/js/all.js';

// Tasks container
const ulContainer = document.querySelector('.list');
// Input of tasks
const taskInput = document.querySelector('.task-input');

//Events
eventListeners();
function eventListeners() {
  taskInput.addEventListener('input', saveTask);
}

// Empty object for task
const objTask = {
  description: '',
  complete: ''
}

function saveTask(e) {
  objTask[e.target.name] = e.target.value;
  objTask.complete = false;
  console.log(e.target.value);
}

//class for array of objects
class ArrayTask {
  constructor() {
    this.tasks = []
  }

  addTask(task) {
    this.tasks = [...this.tasks, task];
  }

  editTask(updatedTask) {
    this.tasks = this.tasks.map( task => task.index === updatedTask.index ? updatedTask: task);
  }

  deleteTask(index) {
    this.tasks = this.task.filter( task => task.index !== index);
  }
}

// class for UI

class UI {
  cleanHTML() {
    while(ulContainer.firstChild) {
      ulContainer.removeChild(ulContainer.firstChild);
    }
  }
  printTask({tasks}) {

    this.cleanHTML();

    tasks.forEach(task => {
      const {description, complete, index} = task;

      const taskContainer = document.createElement('li');
      taskContainer.classList.add(`${index}`, 'list-unit', `${complete}`);
      taskContainer.innerHTML = `<i class="fa-regular fa-square"></i> ${description} <i class="fas fa-ellipsis-v dots"></i>`;
      ulContainer.appendChild(taskContainer);

    });
    

  }
}

const ui = new UI();
const listofTasks = new ArrayTask();

// Add task

function newTask(e) {
  const {description, complete} = objTask;
  if (e.key == 'Enter' && description !== '') {
    if(complete) {

    } else {
      objTask.index = listofTasks.length;
      listofTasks.addTask({...objTask});
    }

    ui.printTask(listofTasks);

    resetObject();
  
    taskInput.value = '';
  }
}

function resetObject() {
  objTask.description = '';
}

document.addEventListener('keypress', newTask);

