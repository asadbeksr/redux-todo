const initialState = [];

export default function itemReducers(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.name];
    case "DELETE_ITEM":
      return state.filter((elm, idx) => idx !== action.index);
    case "CLEAR_ITEMS":
      return initialState;
    default:
      return state;
  }
}
