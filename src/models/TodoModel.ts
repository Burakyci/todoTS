import { ITodo } from "../types/todoType";

export class TodoModel implements ITodo {
  id = 1;
  userId? = undefined;
  title = "a";
  complated = false;
  constructor(
    message: string,
    done: boolean = false,
    id?: number,
    userId?: number
  ) {
    this.title = message;
    this.complated = done;
    this.id = id ?? new Date().getTime();
  }
}
