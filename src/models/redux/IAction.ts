export interface IAction<T = any> { // tslint:disable-line:no-any
  type: string;
  payload?: T;
}
