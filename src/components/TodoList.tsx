import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  remove,
  toggleDone,
  update,
  activeTodoActive,
} from "../state/slices/todo.slice";
import type { RootState } from "../state/store";

const TodoList: React.FC = () => {
  const { list, activeItemIndex } = useSelector(
    (state: RootState) => state.todos
  );

  // const [activeTodoIndex, setActiveTodoIndex] = React.useState<
  //   number | undefined
  // >(undefined);
  const [message, setMessege] = React.useState<string>("");
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {list.map((value, index) => {
          return (
            <li key={index}>
              <h6>
                <span style={{ fontWeight: "bold" }}>{value.id}</span>
                {activeItemIndex === index ? (
                  <input
                    type="text"
                    onChange={(e) => {
                      setMessege(e.target.value);
                    }}
                    value={message}
                  />
                ) : (
                  <span>{value.message}</span>
                )}
              </h6>
              <button onClick={() => dispatch(remove({ id: value.id }))}>
                Delete
              </button>{" "}
              <input
                type="checkbox"
                onChange={() => dispatch(toggleDone(value))}
                checked={value.done}
              />
              <button
                onClick={() => {
                  if (activeItemIndex === index) {
                    dispatch(update({ id: value.id, message: message }));
                    dispatch(activeTodoActive({ index: undefined }));
                  } else {
                    setMessege(value.message);
                    dispatch(activeTodoActive({ index: index }));
                  }
                }}
              >
                {activeItemIndex === index ? "Save" : "Edit"}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
