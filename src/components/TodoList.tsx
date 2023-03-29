import * as React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../state/store";
import { TodoItem } from "./TodoItem";

const TodoList: React.FC = () => {
  const { list } = useSelector((state: RootState) => state.todos);

  return (
    <div>
      <ul>
        {list.map((value, index) => {
          return <TodoItem key={index} item={value} index={index} />;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
