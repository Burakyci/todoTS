import * as React from "react";
import TodoList from "../components/TodoList";
import { useAppDispatch } from "../state/store";
import { add } from "../state/slices/todo.slice";
import todoService from "../services/todoService";

const Todos: React.FC = () => {
  const [todo, setTodo] = React.useState<string>("");
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    const fetchData = async () => {
      const data = await todoService.getdata(3);
      console.log(data);
    };
    fetchData();
  }, []);

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
          dispatch(
            add({ id: 1, title: `${todo}`, complated: false, userId: 1 })
          );
          setTodo("");
        }}
      >
        Save
      </button>
      <TodoList />
    </div>
  );
};

export default Todos;
