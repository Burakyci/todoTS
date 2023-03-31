import * as React from "react";
import TodoList from "../components/TodoList";
import { add } from "../state/slices/todo.slice";
import { RootState } from "../state/store";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../state/store";

const TodosPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const { list } = useSelector((state: RootState) => state.todos);
  const [todo, setTodo] = React.useState<string>("");
  console.log(list);
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
          dispatch(add({ id: 1, title: `${todo}`, complated: false }));
          setTodo("");
        }}
      >
        add{" "}
      </button>
      <NavLink to="/search">Search</NavLink>
      <NavLink to="SearchTodo">/searchfetch</NavLink>

      <TodoList />
    </div>
  );
};

export default TodosPage;
