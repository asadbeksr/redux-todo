const initialState = [];

export default function itemReducers(state = initialState, action) {
  switch (action.type) {
    case "FINISH_TASK":
      return [...state, action.name];
    case "CLEAR_ITEMS":
      return initialState;
    case "DELETE_FINISHED":
      return state.filter((elm, idx) => idx !== action.index);
    default:
      return state;
  }
}
