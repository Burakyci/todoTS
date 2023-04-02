import { ITodo } from "../types/todoType";

export class TodoModel implements ITodo {
  id = 1;
  userId?= undefined;
  title = "a";
  completed = false;
  constructor(data: ITodo) {
    Object.assign(this, { ...data });
  }
}
