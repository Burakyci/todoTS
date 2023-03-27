export interface ITodoType {
  id: number;
  message: string;
  done: boolean;
}
export interface ITodosListProps {
  todos: ITodoType[];
  removeTodo: (id: number) => void;
  setIsDone: (id: number) => any;
  updateTodo: (id: number, message: string) => any;
}

export interface ITodosState {
  list: ITodoType[];
  activeItemIndex: number | undefined;
}


export interface IProps { }
