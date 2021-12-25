import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteFinished } from "../redux/actions/itemAction";

export default function Items() {
  const finished = useSelector((state) => state.filter);
  console.log(finished);
  const dispatch = useDispatch();

  return (
    <div>
      {finished.map((elm, idx) => (
        <div className="list" key={idx}>
          <div
            className="finish"
            onClick={() => {
              dispatch(deleteFinished(idx));
              dispatch(addItem(elm));
            }}
          >
            {elm}
          </div>

          <FontAwesomeIcon
            className="delete"
            icon={faTimes}
            onClick={() => dispatch(deleteFinished(idx))}
          />
        </div>
      ))}
    </div>
  );
}
