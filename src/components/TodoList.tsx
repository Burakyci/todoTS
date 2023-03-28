import * as React from "react";
import { useSelector } from "react-redux";
import { getTodos } from "../state/slices/todo.slice";
import { RootState, useAppDispatch } from "../state/store";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { list, loading, error } = useSelector((state: RootState) => state.todos);
  React.useEffect(() => {
    dispatch(getTodos());
  }, []);
  return (
    <div>
      {
        loading ?
          (<h2>
            Loading ...
          </h2>)
          : error ?
            (
              <h2>{error}</h2>
            ) : (
              <ul>
                {list.map((value, index) => (
                  <TodoItem
                    key={value.id}
                    item={value}
                    index={index}
                  />
                ))}
              </ul>
            )
      }
    </div>
  );
};

export default TodoList;
