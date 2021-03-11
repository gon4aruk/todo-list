import { renderTasks } from './renderTasks';
import { createTask } from './tasksGateway';

const inputElem = document.querySelector('.task-input');

export const onButtonClick = () => {
  if (inputElem.value === '') {
    return;
  }

  const inputValue = inputElem.value;
  inputElem.value = '';

  const newTask = {
    text: inputValue,
    done: false,
    timeOfChange: new Date(),
  };

  createTask(newTask)
    .then(() => renderTasks());
};
