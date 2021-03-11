import { initToDoListHandlers } from './list/initHandlers';
import { renderTasks } from './list/renderTasks';
import './index.scss';

const onDocumentLoaded = () => {
  renderTasks();
  initToDoListHandlers();
};

document.addEventListener('DOMContentLoaded', onDocumentLoaded);

const onStorageChange = (event) => {
  if (event.key !== 'tasksList') {
    return;
  }

  renderTasks();
};

window.addEventListener('storage', onStorageChange);
