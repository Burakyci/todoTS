import * as React from "react";
import TodoList from "./TodoList";
import { ITodoType } from "../types/todoType";
import { TodoModel } from "../models/TodoModel";
import { CompletionTriggerKind } from "typescript";

const Todos: React.FC = () => {
  const [todo, setTodo] = React.useState<string>("");
  const [todos, setTodos] = React.useState<ITodoType[]>([
    { id: 1, message: "Learn TypeScript", done: false },
    { id: 2, message: "Build a project", done: true },
    { id: 3, message: "Deploy to production", done: false },
  ]);

  function handlerTodos(id: number) {
    const TodoModel1 = new TodoModel(todo, false, todos.length + 1);
    setTodos((prev) => [...prev, TodoModel1]);
    setTodo("");
  }
  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const setIsDone = (id: number) => {
    setTodos((prev) => {
      const newTodos = prev.map((td) => {
        if (td.id === id) {
          return {
            ...td,
            done: !td.done,
          };
        } else {
          return td;
        }
      });
      return newTodos;
    });
  };

  const updateTodo = (id: number, message: string) => {
    setTodos((prev) => {
      const newTodo = prev.map((td) => {
        if (td.id === id) {
          return {
            ...td,
            message: message,
          };
        } else {
          return td;
        }
      });
      return newTodo;
    });
  };

  return (
    <div>
      <input
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        type="text"
      />

      <button onClick={() => handlerTodos(2)}>Save</button>

      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        setIsDone={setIsDone}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default Todos;
