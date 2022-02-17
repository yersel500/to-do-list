import './style.css';
import '@fortawesome/fontawesome-free/js/all.js';

// Tasks container
const ulContainer = document.querySelector('.list');
// Input of tasks
const taskInput = document.querySelector('.task-input');

let edit = false;

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
    this.tasks = this.tasks.map( task => task.index == updatedTask.index ? updatedTask: task);
  }

  deleteTask(index) {
    this.tasks = this.tasks.filter( task => task.index != index);
  }

  saveLocalStorage() {
    localStorage.setItem('myTasks', JSON.stringify(this.tasks));
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
      taskContainer.onclick = (e) => eraseTask(e, index, task);
    });
    

  }
}

const ui = new UI();
const listofTasks = new ArrayTask();

// Add task

function newTask(e) {
  const {description, complete} = objTask;

  if (e.key == 'Enter' && description !== '') {
    if(edit) {
      listofTasks.editTask({...objTask});
      
      edit = false;
    } else {
      objTask.index = listofTasks.tasks.length + 1;
      listofTasks.addTask({...objTask});
    }

    listofTasks.saveLocalStorage();

    ui.printTask(listofTasks);

    resetObject();
  
    taskInput.value = '';
  }
}

function resetObject() {
  objTask.description = '';
}

document.addEventListener('keypress', newTask);

function eraseTask(e,index, task) {
  if(e.target.classList.contains('fa-square')) {
    listofTasks.deleteTask(index);
    ui.printTask(listofTasks);
    listofTasks.saveLocalStorage();
  } else if (e.target.classList.contains('dots')) {
    enableEdition(task);
    listofTasks.saveLocalStorage();
  }
}

function enableEdition(task) {
  const {description, complete, index} = task;

  //Upload content to the object
  objTask.description = description;
  objTask.complete = complete;
  objTask.index = index;



  //Fill the input
  taskInput.value = description;

  edit = true;
}

// local storage

window.onload = () => {
  if(localStorage.getItem('myTasks')) {
    listofTasks.tasks = JSON.parse(localStorage.getItem('myTasks'));
    ui.printTask(listofTasks);
  }

}

