// import _ from 'lodash';
import './style.css';
import '@fortawesome/fontawesome-free/js/all.js';

// function component() {
//   const element = document.createElement('div');

//   // Lodash, now imported by this script
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//   return element;
// }

// document.body.appendChild(component());

const ulContainer = document.querySelector('.list');

const lisTasks = [
  {
    description: 'task 1',
    completed: false,
    index: 0,
  },
  {
    description: 'task 2',
    completed: false,
    index: 1,
  },
  {
    description: 'task 3',
    completed: false,
    index: 2,
  },
];

window.onload = () => {
  lisTasks.forEach((task) => {
    const taskContainer = document.createElement('li');
    taskContainer.classList.add(`${task.index}`, 'list-unit');
    taskContainer.innerHTML = `<i class="fa-regular fa-square"></i> ${task.description} <i class="fas fa-ellipsis-v dots"></i>`;
    ulContainer.appendChild(taskContainer);
  });
};
