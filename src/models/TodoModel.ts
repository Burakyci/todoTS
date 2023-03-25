import { todoType } from "../types/todoType";

export class TodoModel implements todoType {
  id = 1;
  message = "a";
  done = false;
  constructor(message: string, done: boolean = false, id: number) {
    this.message = message;
    this.done = done;
    this.id = id;
  }
}
