import { IOperationResult, OperationResult } from "../models/CommonModels";
import { TodoModel } from "../models/TodoModel";
import { ITodo, ITodoSearchParams } from "../types/todoType";
const baseUrl = "https://jsonplaceholder.typicode.com";


class TodoService {
  getTodoSearchQueryString(params: ITodoSearchParams) {
    const searchParams = new URLSearchParams();
    if (Object.keys(params).length > 0) {
      for (const key in params) {
        if (Object.prototype.hasOwnProperty.call(params, key)) {
          const value = params[key];
          if (value) {
            searchParams.append(key, value);
          }
        }
      }
    }
    return searchParams.toString();//?completed=true&userId=1
  }

  getTodos = async (params: ITodoSearchParams): Promise<IOperationResult<ITodo[]>> => {
    try {
      let url = `${baseUrl}/todos?${this.getTodoSearchQueryString(params)}}`;
      const response = await fetch(url);
      if (response.ok) {
        const todoData = await response.json();
        const data = todoData.map((todo: ITodo) => new TodoModel(todo));
        return new OperationResult<ITodo[]>({
          success: true,
          data
        });
      } else {
        return new OperationResult<ITodo[]>({
          success: false,
          message: "Error while fetching todos"
        });
      }
    } catch (error: any) {
      return new OperationResult<ITodo[]>({
        success: false,
        message: error.message
      });
    }
  };

}

export default new TodoService();
