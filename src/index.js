import './style.css';
import '@fortawesome/fontawesome-free/js/all.js';
import { taskInput, ulContainer } from './modules/selectors';
import {
  objTask, listofTasks, newTask, printTask,
} from './modules/ui';

function saveTask(e) {
  objTask[e.target.name] = e.target.value;
  objTask.complete = false;
}

// Events
function eventListeners() {
  taskInput.addEventListener('input', saveTask);
}

eventListeners();

// Add task

document.addEventListener('keypress', newTask);

// event on list container
ulContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-square')) {
    const index = Number(e.target.parentElement.classList[0]);
    listofTasks.deleteTask(index);
    printTask(listofTasks);
    listofTasks.saveLocalStorage();
  }
});

// local storage

window.onload = () => {
  if (localStorage.getItem('myTasks')) {
    listofTasks.tasks = JSON.parse(localStorage.getItem('myTasks'));
    printTask(listofTasks);
  }
};
