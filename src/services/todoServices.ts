import { ITodo } from "../types/todoType";

class TodoService {
  baseUrl = "https://jsonplaceholder.typicode.com";
  getTodos = async (): Promise<ITodo[] | string> => {
    const url = `${this.baseUrl}/todos`;
    const res = (await fetch(url)).json();
    return res;
  };
  catch(error: any) {
    return error.message as string;
  }
}

export default new TodoService();
