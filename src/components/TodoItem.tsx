import React from "react";
import { useSelector } from "react-redux";
import {
  remove,
  activeTodoActive,
  toggleDone,
  update,
} from "../state/slices/todo.slice";
import { RootState, useAppDispatch } from "../state/store";
import { ITodoItemProps } from "../types/todoType";

export const TodoItem: React.FC<ITodoItemProps> = ({ index, item }) => {
  const { activeItemIndex } = useSelector((state: RootState) => state.todos);
  const [message, setMessege] = React.useState<string>("");
  const dispatch = useAppDispatch();
  return (
    <div>
      <li key={index}>
        <h6>
          <span style={{ fontWeight: "bold" }}>{item.id}</span>
          {activeItemIndex === index ? (
            <input
              type="text"
              onChange={(e) => {
                setMessege(e.target.value);
              }}
              value={message}
            />
          ) : (
            <span>{item.title}</span>
          )}
        </h6>
        <button onClick={() => dispatch(remove({ id: item.id }))}>
          Delete
        </button>{" "}
        <input
          type="checkbox"
          onChange={() => dispatch(toggleDone(item))}
          checked={item.complated}
        />
        <button
          onClick={() => {
            if (activeItemIndex === index) {
              dispatch(update({ id: item.id, message: message }));
              dispatch(activeTodoActive({ index: undefined }));
            } else {
              setMessege(item.title);
              dispatch(activeTodoActive({ index: index }));
            }
          }}
        >
          {activeItemIndex === index ? "Save" : "Edit"}
        </button>
      </li>
    </div>
  );
};
