import { renderTasks } from "./renderTasks.js";
import { deleteTask, getTasksList, updateTask } from "./tasksGateway.js";

const createUpdatedTask = (event, tasksList, taskId) => {
  const { done, ...rest } = tasksList.find((task) => task.id === taskId);

  const updatedTask = {
    ...rest,
    timeOfChange: new Date(),
    done: event.target.checked,
  };

  return updatedTask;
};

const onCheckboxClick = (event) => {
  const taskId = event.target.dataset.id;

  getTasksList()
    .then((tasksList) => createUpdatedTask(event, tasksList, taskId))
    .then((updatedTask) => updateTask(taskId, updatedTask))
    .then(() => renderTasks());
};

const onDeleteBtnClick = (event) => {
  const taskId = event.target.dataset.id;

  deleteTask(taskId).then(() => renderTasks());
};

export const onListClick = (event) => {
  const isCheckbox = event.target.classList.contains("list__item-checkbox");
  const isDeleteBtn = event.target.classList.contains("list__item_delete-btn");
  
  if (isCheckbox) {
    onCheckboxClick(event);
  } else if (isDeleteBtn) {
    onDeleteBtnClick(event);
  }
};
