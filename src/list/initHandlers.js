import { onButtonClick } from './addNewTask';
import { onListClick } from './checkboxClick';

export const initToDoListHandlers = () => {
  const buttonElem = document.querySelector('.btn');
  buttonElem.addEventListener('click', onButtonClick);

  const listElem = document.querySelector('.list');
  listElem.addEventListener('click', onListClick);
};
