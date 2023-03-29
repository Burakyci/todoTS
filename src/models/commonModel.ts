import { IOperationsType } from "../types/todoType";

export class OperationResult implements IOperationsType {
  success;
  message;
  data;
  constructor(
    success: boolean = true,
    message: undefined | string = undefined,
    data: any = undefined
  ) {
    this.success = success;
    this.message = message;
    this.data = data;
  }
}
