import './style.css';
import '@fortawesome/fontawesome-free/js/all.js';
import { taskInput, ulContainer, btndeleteTask } from './modules/selectors';
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
  const index = Number(e.target.parentElement.classList[0]);
  if (e.target.classList.contains('fa-trash-can')) {
    listofTasks.deleteTask(index);
    printTask(listofTasks);
    listofTasks.saveLocalStorage();
  } else if (e.target.classList.contains('fa-square')) {
    listofTasks.tasks[index - 1].complete = true;
    printTask(listofTasks);
    listofTasks.saveLocalStorage();
  } else if (e.target.classList.contains('fa-square-check')) {
    listofTasks.tasks[index - 1].complete = false;
    printTask(listofTasks);
    listofTasks.saveLocalStorage();
  }
});

btndeleteTask.addEventListener('click', () => {
  listofTasks.deleteCompletedTask();
  printTask(listofTasks);
  listofTasks.saveLocalStorage();
});

// local storage
window.onload = () => {
  if (localStorage.getItem('myTasks')) {
    listofTasks.tasks = JSON.parse(localStorage.getItem('myTasks'));
    printTask(listofTasks);
  }
};
