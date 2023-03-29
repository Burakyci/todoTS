import { ITodo } from "../types/todoType";

export class TodoModel implements ITodo {
  id;
  title;
  complated;
  userId;
  constructor(
    message: string,
    done: boolean = false,
    id: number,
    userId: number
  ) {
    this.title = message;
    this.complated = done;
    this.id = id ?? new Date().getTime();
    this.userId = userId;
  }
}
