import * as React from "react";
import { todosType } from "../types/todoType";

const TodoList: React.FC<todosType> = ({
  todos,
  removeTodo,
  isDone,
  updateTodo,
}) => {
  const [updateMod, setupdateMod] = React.useState<boolean>(false);
  const [massege, setMessege] = React.useState<string>("");
  return (
    <div>
      <ul>
        {todos.map((value, index) => {
          return (
            <li key={index}>
              <h6>
                {value.id}
                {updateMod ? (
                  <> {value.message}</>
                ) : (
                  <>
                    <input
                      type="text"
                      onChange={(e) => {
                        setMessege(e.target.value);
                      }}
                      value={massege}
                    />
                  </>
                )}
              </h6>
              <button onClick={() => removeTodo(value.id)}>Delete</button>
              <input
                type="checkbox"
                onChange={() => isDone(value.id)}
                checked={value.done}
              />
              <button
                onClick={() => {
                  setupdateMod(!updateMod);
                  updateTodo(value.id, massege);
                }}
              >
                Update
              </button>
            </li>
          );
        })}
      </ul>
      <input type="checkbox" />
    </div>
  );
};

export default TodoList;
