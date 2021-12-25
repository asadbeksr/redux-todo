import { createStore, combineReducers } from "redux";

import itemReducer from "./reducers/itemReducer";
import filterReducer from "./reducers/filterReducer";
const reducers = combineReducers({
  items: itemReducer,
  filter: filterReducer,
});

export const store = createStore(reducers);
