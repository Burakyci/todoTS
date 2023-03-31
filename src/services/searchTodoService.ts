import { ITodo } from "../types/todoType";

class SearchTodoService {
  baseUrl = "https://jsonplaceholder.typicode.com";
  getTodos = async (search: string): Promise<ITodo[] | string> => {
    const url = `${this.baseUrl}/todos?${search}`;
    const res = (await fetch(url)).json();
    return res;
  };
  catch(error: any) {
    return error.message as string;
  }
}

export default new SearchTodoService();
