export interface ITodo {
  id: number;
  title: string;
  done: boolean;
}

export interface ITodoItemProps {
  index: number;
  item: ITodo;
}

export interface ITodosListProps {
  todos: ITodo[];
  removeTodo: (id: number) => void;
  setIsDone: (id: number) => any;
  updateTodo: (id: number, message: string) => any;
}

export interface ITodosState {
  list: ITodo[];
  loading: boolean;
  error: string | undefined;
  activeItemIndex: number | undefined;
}

export interface IProps { }
