import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
  const { list, loading, error } = useSelector(
    (state: RootState) => state.todos
  );

  return (
    <div>
      {loading ? (
        <h2>Loading ...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <ul>
          {list.map((value, index) => (
            <TodoItem key={value.id} item={value} index={index} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
