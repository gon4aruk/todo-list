import { getTasksList } from "./tasksGateway.js";

const listElem = document.querySelector(".list");

export const createCheckbox = (done, id) => {
  const checkboxElem = document.createElement("input");
  checkboxElem.setAttribute("type", "checkbox");
  checkboxElem.classList.add("list__item-checkbox");
  checkboxElem.checked = done;
  checkboxElem.dataset.id = id;

  return checkboxElem;
};

const createListItem = ({ text, done, id }) => {
  const listItemElem = document.createElement("li");
  listItemElem.classList.add("list__item");
  const checkboxElem = createCheckbox(done, id);
  if (done) {
    listItemElem.classList.add("list__item_done");
  }

  const textElem = document.createElement('span');
  textElem.classList.add('list__item_text');
  textElem.textContent = text;

  const deleteBtnElem = document.createElement('button');
  deleteBtnElem.classList.add('list__item_delete-btn')
  deleteBtnElem.dataset.id = id;

  listItemElem.append(checkboxElem, textElem, deleteBtnElem);

  return listItemElem;
};

const createListElems = (tasksList) => {
  listElem.innerHTML = "";

  const tasksElems = tasksList
    .sort(
      (el1, el2) =>
        el1.done - el2.done ||
        new Date(el2.timeOfChange) - new Date(el1.timeOfChange)
    )
    .map(createListItem);

  listElem.append(...tasksElems);
}

export const renderTasks = () => {
  getTasksList()
    .then(tasksList => createListElems(tasksList));
};
