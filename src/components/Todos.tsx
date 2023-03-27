import * as React from "react";
import TodoList from "./TodoList";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../state/slices/todo.slice";
import type { RootState } from "../state/store";

const Todos: React.FC = () => {
  const { list } = useSelector((state: RootState) => state.todos);
  console.log(list);
  const [todo, setTodo] = React.useState<string>("");
  const dispatch = useDispatch();

  return (
    <div>
      <input
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        type="text"
      />

      <button
        onClick={() =>
          dispatch(add({ id: 1, message: `${todo}`, done: false }))
        }
      >
        Save
      </button>
      <TodoList />
    </div>
  );
};

export default Todos;
