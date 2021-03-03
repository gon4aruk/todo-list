import { createCheckbox } from "../renderTasks";

it("shound contains class", () => {
  const checkboxElem = createCheckbox(false, 1);

  expect(checkboxElem.classList.contains('list__item-checkbox')).toEqual(true);
});


it("shound contains data-id", () => {
    const checkboxElem = createCheckbox(false, 1);
  
    expect(checkboxElem.dataset.id).toEqual('1');
  });
  
