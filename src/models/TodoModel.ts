import { ITodo } from "../types/todoType";

export class TodoModel implements ITodo {
  id = 1;
  title = "a";
  done = false;
  constructor(message: string, done: boolean = false, id?: number) {
    this.title = message;
    this.done = done;
    this.id = id ?? (new Date()).getTime();
  }
}
