import axios from "axios";
import { OperationResult } from "../models/commonModel";
import { IOperationsType, ITodo } from "../types/todoType";

class TodoService {
  baseApi = "https://jsonplaceholder.typicode.com/todos";
  async getdata(id: number = 1): Promise<ITodo> {
    try {
      const url = `${this.baseApi}/${id}`;
      const { data } = await axios(url);
      const result = new OperationResult(true, "success", data);
      return data;
    } catch (error: any) {
      const result = new OperationResult(false, "error", undefined);
      return error;
    }
  }
}

export default new TodoService();
