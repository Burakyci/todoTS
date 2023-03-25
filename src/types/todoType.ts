export interface todoType {
  id: number;
  message: string;
  done: boolean;
}
export interface todosType {
  todos: todoType[];
  removeTodo: (id: number) => void;
  isDone: (id: number) => any;
  updateTodo: (id: number, message: string) => any;
}

export interface IProps {}
