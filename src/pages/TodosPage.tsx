import * as React from "react";
import TodoList from "../components/TodoList";
import { add } from "../state/slices/todo.slice";
import { useAppDispatch } from "../state/store";

const TodosPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const [todo, setTodo] = React.useState<string>("");
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
        onClick={() => {
          dispatch(add({ id: 1, title: `${todo}`, done: false }));
          setTodo("");
        }}
      >
        Save
      </button>
      <TodoList />
    </div>
  );
};

export default TodosPage;
