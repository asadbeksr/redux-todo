import React from "react";
import "./App.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, clearItems } from "./redux/actions/itemAction";
import FilterTabs from "./components/FilterTabs";

export default function App() {
  const dispatch = useDispatch();
  const [listItem, setListItem] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    if (listItem.length > 0) {
      dispatch(addItem(listItem));
      setListItem("");
    } else {
      alert("Please type something first");
    }
  }

  return (
    <div className="App">
      <div>
        <h1>Redux TODO</h1>
        <form onSubmit={onSubmit}>
          <input
            placeholder="add task"
            value={listItem}
            onChange={(e) => setListItem(e.target.value)}
          />
          <div>
            <button type="submit">Add Todo</button>
            <button type="button" onClick={() => dispatch(clearItems())}>
              Clear Todo
            </button>
          </div>
        </form>
        <FilterTabs />
      </div>
    </div>
  );
}
