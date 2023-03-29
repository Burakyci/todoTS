export interface ITodo {
  id: number;
  title: string;
  complated: boolean;
  userId: number | undefined;
}
export interface ITodosListProps {
  todos: ITodo[];
  removeTodo: (id: number) => void;
  setIsDone: (id: number) => any;
  updateTodo: (id: number, message: string) => any;
}

export interface ITodosState {
  list: ITodo[];
  activeItemIndex: number | undefined;
  loading: boolean;
  error: null | string;
}

export interface ITodoItemProps {
  index: number;
  item: ITodo;
}

export interface IOperationsType {
  success: boolean;
  message: string | undefined;
  data: ITodo[] | undefined;
}
