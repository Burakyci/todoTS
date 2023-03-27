import * as React from "react";
import { ITodosListProps } from "../types/todoType";

const TodoList: React.FC<ITodosListProps> = ({
  todos,
  removeTodo,
  setIsDone,
  updateTodo,
}) => {
  const [activeTodoIndex, setActiveTodoIndex] = React.useState<number | undefined>(undefined);
  const [message, setMessege] = React.useState<string>("");
  return (
    <div>
      <ul>
        {todos.map((value, index) => {
          return (
            <li key={index}>
              <h6>
                <span style={{ fontWeight: 'bold' }}>{value.id}</span>
                {activeTodoIndex === index ? (
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
              <button onClick={() => removeTodo(value.id)}>Delete</button>
              <input
                type="checkbox"
                onChange={() => setIsDone(value.id)}
                checked={value.done}
              />
              <button
                onClick={() => {
                  if (activeTodoIndex === index) {
                    updateTodo(value.id, message);
                    setActiveTodoIndex(undefined);
                  } else {
                    setMessege(value.message);
                    setActiveTodoIndex(index);
                  }
                }}
              >
                {
                  activeTodoIndex === index ? 'Update' : 'Edit'
                }
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
