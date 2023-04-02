export interface IOperationResult<T> {
  success: boolean;
  message?: string;
  data?: T | null;
};
export class OperationResult<T> implements IOperationResult<T> {
  success: boolean = false;
  message?: string;
  data?: T | null = null;
  constructor(params: IOperationResult<T> = {
    success: false
  }) {
    Object.assign(this, { ...params });
  }
}
