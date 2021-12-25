export const addItem = (name) => {
  return {
    type: "ADD_ITEM",
    name: name,
  };
};
export const deleteItem = (idx) => {
  return {
    type: "DELETE_ITEM",
    index: idx,
  };
};
export const clearItems = () => {
  return {
    type: "CLEAR_ITEMS",
  };
};
export const finishItem = (name) => {
  return {
    type: "FINISH_TASK",
    name: name,
  };
};
export const deleteFinished = (idx) => {
  return {
    type: "DELETE_FINISHED",
    index: idx,
  };
};
