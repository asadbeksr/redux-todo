import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem, finishItem } from "../redux/actions/itemAction";

export default function Items() {
  const items = useSelector((state) => state.items);
  console.log(items);
  const dispatch = useDispatch();

  return (
    <div>
      {items.map((elm, idx) => (
        <div className="list" key={idx}>
          <div
            onClick={() => {
              dispatch(finishItem(elm));
              dispatch(deleteItem(idx));
            }}
            className="active"
          >
            {elm}
          </div>

          <FontAwesomeIcon
            className="delete"
            icon={faTimes}
            onClick={() => dispatch(deleteItem(idx))}
          />
        </div>
      ))}
    </div>
  );
}
