import { ulContainer, taskInput } from './selectors';
import ArrayTask from './class-methods';

// constant variables
const CHECK = 'fa-square-check';
const UNCHECK = 'fa-square';
const LINE_THROUGH = 'lineThrough';

let edit = false;
export const listofTasks = new ArrayTask();
// Empty object for task
export const objTask = {
  description: '',
  complete: '',
};

export function enableEdition(task) {
  const { description, complete, index } = task;

  // Upload content to the object
  objTask.description = description;
  objTask.complete = complete;
  objTask.index = index;

  // Fill the input
  taskInput.value = description;

  edit = true;
}

export function eraseTask(e, index, task) {
  if (e.target.classList.contains(`specific-${index}`)) {
    enableEdition(task);
    listofTasks.saveLocalStorage();
  }
}

export function printTask({ tasks }) {
  while (ulContainer.firstChild) {
    ulContainer.removeChild(ulContainer.firstChild);
  }

  tasks.forEach((task) => {
    const { description, complete, index } = task;

    const DONE = complete ? CHECK : UNCHECK;
    const LINE = complete ? LINE_THROUGH : '';

    const taskContainer = document.createElement('li');
    taskContainer.classList.add(`${index}`, 'list-unit', `${complete}`);
    taskContainer.innerHTML = `<i class="fa-regular ${DONE}"></i><input type='text' value = '${description}' class='specific-${index} ${LINE} today-task' readonly><i class="fa-regular fa-trash-can"></i><i class="fas fa-ellipsis-v dots"></i>`;

    ulContainer.appendChild(taskContainer);
    taskContainer.onclick = (e) => eraseTask(e, index, task, complete);
  });
}

export function cleanHTML() {
  while (ulContainer.firstChild) {
    ulContainer.removeChild(ulContainer.firstChild);
  }
}

export function resetObject() {
  objTask.description = '';
}

export function newTask(e) {
  const { description } = objTask;

  if (e.key === 'Enter' && description !== '') {
    if (edit) {
      listofTasks.editTask({ ...objTask });

      edit = false;
    } else {
      objTask.index = listofTasks.tasks.length + 1;
      listofTasks.addTask({ ...objTask });
    }

    listofTasks.saveLocalStorage();

    printTask(listofTasks);

    resetObject();

    taskInput.value = '';
  }
}
