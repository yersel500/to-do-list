import { ulContainer, taskInput } from './selectors';
import ArrayTask from './class-methods';

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
  if (e.target.classList.contains('dots')) {
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

    const taskContainer = document.createElement('li');
    taskContainer.classList.add(`${index}`, 'list-unit', `${complete}`);
    taskContainer.innerHTML = `<i class="fa-regular fa-square"></i> ${description} <i class="fas fa-ellipsis-v dots"></i>`;
    ulContainer.appendChild(taskContainer);
    taskContainer.onclick = (e) => eraseTask(e, index, task);
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
