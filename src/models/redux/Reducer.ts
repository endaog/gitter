import { IAction } from './IAction';

export type Reducer<S, A = IAction> = (state: S, action: A) => S; // tslint:disable-line no-any
